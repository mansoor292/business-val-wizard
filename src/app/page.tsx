'use client';

import ProtectedContent from "@/components/protected-content";
import { useAuth } from "@/lib/auth/auth-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Authentication Demo</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Public Content</h2>
          <p className="mb-4">This content is visible to everyone.</p>
          {!isAuthenticated && (
            <Button onClick={() => router.push('/login')}>
              Sign In
            </Button>
          )}
        </div>

        <div className="mt-8">
          <ProtectedContent />
        </div>
      </div>
    </main>
  );
}
