'use client';

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "src/lib/auth/auth-context";
import { ThemeProvider } from "next-themes";
import { DataProvider } from "src/lib/data/context";
import { DrizzleClientAdapter } from "src/lib/data/implementations/drizzle/client-adapter";

// Create a single instance of the client adapter
const dataAdapter = new DrizzleClientAdapter();

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
          <DataProvider adapter={dataAdapter}>
            {children}
          </DataProvider> 
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
