'use client';

import { useSession } from "next-auth/react";
import { usePathname, redirect } from "next/navigation";

export function ProtectedContent({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const pathname = usePathname();

  if (status === "loading") {
    return null; // Or a loading spinner
  }

  if (status === "unauthenticated" && pathname !== "/login") {
    redirect("/login");
  }

  if (status === "authenticated" && pathname === "/login") {
    redirect("/");
  }

  return <>{children}</>;
}
