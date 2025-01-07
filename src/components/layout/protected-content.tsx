'use client';

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export function ProtectedContent({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const pathname = usePathname();

  if (status === "loading") {
    return null; // Or a loading spinner
  }

  // Only show content if authenticated or on login page
  if (status === "unauthenticated" && pathname !== "/login") {
    window.location.href = "/login";
    return null;
  }

  return <>{children}</>;
}
