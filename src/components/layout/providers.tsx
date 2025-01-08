'use client';
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ProtectedContent } from "src/components/layout/protected-content";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProtectedContent>{children}</ProtectedContent>
        </ThemeProvider>
    </SessionProvider>
  );
}
