import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card"
import { Avatar, AvatarFallback } from "src/components/ui/avatar"
import { Label } from "src/components/ui/label"
import type { UserProfile } from "src/lib/mock/user-data"

interface UserProfileProps {
  user: UserProfile;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarFallback className="text-2xl">
            {user.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label className="text-muted-foreground">Role</Label>
            <p className="font-medium">{user.role}</p>
          </div>
          <div className="space-y-1">
            <Label className="text-muted-foreground">Department</Label>
            <p className="font-medium">{user.department}</p>
          </div>
          <div className="space-y-1">
            <Label className="text-muted-foreground">Status</Label>
            <p className="font-medium capitalize">
              {user.preferences.communication.availabilityStatus}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
