'use client';

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "src/lib/auth/auth-context";
import { ThemeProvider } from "next-themes";
import { DataProvider } from "src/lib/data/context";
import { MemoryAdapter } from "src/lib/data/memory-adapter";

// Create a single instance of the adapter for the entire app
const dataAdapter = new MemoryAdapter();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
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
