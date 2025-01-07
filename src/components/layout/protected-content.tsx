'use client';

import { useSession, signOut } from "next-auth/react";
import { Button } from "src/components/ui/button";

export default function ProtectedContent() {
  const { data: session } = useSession();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Protected Content</h2>
      <p className="mb-4">Welcome, {session?.user?.name || session?.user?.email}!</p>
      <p className="mb-4">This content is only visible to authenticated users.</p>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
