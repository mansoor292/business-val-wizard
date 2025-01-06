"use client";

import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";
import type { User } from "src/lib/graphql/generated/graphql";

interface UserProfileCardProps {
  member: User;
}

export function UserProfileCard({ member }: UserProfileCardProps) {
  const initials = (member.name || "A")
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={member.avatar || ''} alt={member.name || "a"} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium">Department</p>
            <p className="text-sm text-muted-foreground">{member.department}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-muted-foreground">{member.email}</p>
          </div>
          {member.skills && member.skills.filter(Boolean).length > 0 && (
            <div>
              <p className="text-sm font-medium mb-1">Skills</p>
              <div className="flex flex-wrap gap-1">
                {member.skills.filter((s): s is string => Boolean(s)).map((skill: string) => (
                  <Badge key={`${member.id}-${skill}`} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
