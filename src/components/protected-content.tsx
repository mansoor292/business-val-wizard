'use client';

import { withAuth } from "src/lib/auth/auth-context";
import { useAuth } from "src/lib/auth/auth-context";
import { Button } from "src/components/ui/button";

function ProtectedContent() {
  const { user, logout } = useAuth();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Protected Content</h2>
      <p className="mb-4">Welcome, {user?.name}!</p>
      <p className="mb-4">This content is only visible to authenticated users.</p>
      <Button onClick={() => logout()}>Sign Out</Button>
    </div>
  );
}

export default withAuth(ProtectedContent);
