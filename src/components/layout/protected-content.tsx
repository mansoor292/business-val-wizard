'use client';

import { useAuth } from "src/lib/auth/auth-context";
import { Button } from "src/components/ui/button";
import { TeamMember } from "src/lib/data/interface/entities";

export default function ProtectedContent() {
  const { user, logout } = useAuth();
  
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Protected Content</h2>
      <p className="mb-4">Welcome, {(user as unknown as TeamMember)?.name}!</p>
      <p className="mb-4">This content is only visible to authenticated users.</p>
      <Button onClick={() => logout()}>Sign Out</Button>
    </div>
  );
}
