'use client';

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../lib/auth/auth-context";
import { ThemeProvider } from "next-themes";
import { DataProvider } from "../lib/data/context";
import { MemoryAdapter } from "../lib/data/memory-adapter";
import { generateMockValuePropositions } from "../lib/mock/business-data";

const dataAdapter = new MemoryAdapter();

// Initialize mock data
const mockValuePropositions = generateMockValuePropositions(10);
mockValuePropositions.forEach(vp => {
  dataAdapter.createValueProposition(vp);
});

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
