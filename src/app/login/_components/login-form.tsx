'use client';

import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "src/components/ui/card";
import { useState } from "react";
import { useAuth } from "src/lib/auth/auth-context";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const callbackUrl = searchParams.get('callbackUrl') || '/';
      await login(email, password);
      router.push(callbackUrl);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Use any of these emails:
          <br />
          r.chen@manufacturing.com
          <br />
          s.martinez@manufacturing.com
          <br />
          m.zhang@manufacturing.com
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
