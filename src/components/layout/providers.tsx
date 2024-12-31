'use client';

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "src/lib/auth/auth-context";
import { ThemeProvider } from "next-themes";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider 
      // Optimize session handling to reduce unnecessary checks
      refetchInterval={0} // Disable periodic refetching
      refetchOnWindowFocus={false} // Disable refetch on window focus
      refetchWhenOffline={false} // Disable refetch when coming online
    >
      <AuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
