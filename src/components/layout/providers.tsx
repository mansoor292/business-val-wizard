'use client';

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { DataProvider } from "src/lib/data/context";
import { MemoryAdapter } from "src/lib/data/memory-adapter";
import { generateMockValuePropositions, generateMockTeamMembers } from "src/lib/mock/business-data";

const dataAdapter = new MemoryAdapter();

// Initialize mock data
const mockValuePropositions = generateMockValuePropositions(10);
mockValuePropositions.forEach(vp => {
  dataAdapter.createValueProposition(vp);
});

// Initialize mock team members
const mockTeamMembers = generateMockTeamMembers(10);
mockTeamMembers.forEach(member => {
  dataAdapter.createTeamMember(member);
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
}
