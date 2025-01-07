'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export const useAuth = () => {
  const { data: session, status } = useSession();

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
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
    await signOut({ redirect: false });
  };

  return {
    isAuthenticated: status === 'authenticated',
    user: session?.user ?? null,
    login,
    logout,
  };
};
