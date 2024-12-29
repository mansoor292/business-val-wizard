'use client';

import { createContext, useContext, ReactNode } from 'react';
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  const login = async (username: string, password: string) => {
    try {
      const result = await nextAuthSignIn('credentials', {
        username,
        password,
        redirect: false,
        callbackUrl: window.location.origin,
      });
      
      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    await nextAuthSignOut({ redirect: false });
  };

  const value = {
    isAuthenticated: status === 'authenticated',
    user: session?.user ?? null,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function withAuth<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return function ProtectedComponent(props: P) {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
      return <div>Please log in to access this content.</div>;
    }

    return <Component {...props} />;
  };
}
