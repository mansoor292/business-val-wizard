"use client";

import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Card, CardContent, CardHeader } from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";
import type { User } from "src/lib/graphql/generated/graphql";
type PartialUser = Pick<User, 'uId' | 'name' | 'email' | 'info' | 'managerUserId'>;

interface TeamMemberCardProps {
  member: PartialUser;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = member.name
    ? member.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={member.info?.avatar || ''} alt={member.name || ''} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.info?.role || 'Team Member'}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium">Department</p>
            <p className="text-sm text-muted-foreground">{member.info?.department || 'Not assigned'}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-muted-foreground">{member.email || 'No email'}</p>
          </div>
          {member.info?.skills && member.info.skills.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-1">Skills</p>
              <div className="flex flex-wrap gap-1">
                {member.info.skills.filter(Boolean).map((skill: string) => (
                  <Badge key={`${member.uId}-${skill}`} variant="secondary">
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
