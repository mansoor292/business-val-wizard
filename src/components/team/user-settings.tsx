import { Switch } from "src/components/ui/switch"
import { Label } from "src/components/ui/label"
import { RadioGroup, RadioGroupItem } from "src/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select"
import type { UserProfile } from "src/lib/mock/user-data"

type PreferencesSection = keyof UserProfile['preferences'];
type PreferenceValue<T extends PreferencesSection> = UserProfile['preferences'][T];

interface UserSettingsProps {
  user: UserProfile;
  onUpdateSettings: <T extends PreferencesSection>(
    section: T,
    key: keyof PreferenceValue<T>,
    value: PreferenceValue<T>[keyof PreferenceValue<T>]
  ) => void;
}

export function UserSettings({ user, onUpdateSettings }: UserSettingsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notif">Email Notifications</Label>
            <Switch
              id="email-notif"
              checked={user.preferences.notifications.email}
              onCheckedChange={(checked) =>
                onUpdateSettings("notifications", "email", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notif">Push Notifications</Label>
            <Switch
              id="push-notif"
              checked={user.preferences.notifications.push}
              onCheckedChange={(checked) =>
                onUpdateSettings("notifications", "push", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="updates-notif">Updates & News</Label>
            <Switch
              id="updates-notif"
              checked={user.preferences.notifications.updates}
              onCheckedChange={(checked) =>
                onUpdateSettings("notifications", "updates", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reports-notif">Report Summaries</Label>
            <Switch
              id="reports-notif"
              checked={user.preferences.notifications.reports}
              onCheckedChange={(checked) =>
                onUpdateSettings("notifications", "reports", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Display</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="compact-view">Compact View</Label>
            <Switch
              id="compact-view"
              checked={user.preferences.display.compactView}
              onCheckedChange={(checked) =>
                onUpdateSettings("display", "compactView", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="show-metrics">Show Metrics</Label>
            <Switch
              id="show-metrics"
              checked={user.preferences.display.showMetrics}
              onCheckedChange={(checked) =>
                onUpdateSettings("display", "showMetrics", checked)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Dashboard Layout</Label>
            <RadioGroup
              value={user.preferences.display.dashboardLayout}
              onValueChange={(value) =>
                onUpdateSettings("display", "dashboardLayout", value as "grid" | "list")
              }
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="grid" id="grid" />
                <Label htmlFor="grid">Grid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="list" id="list" />
                <Label htmlFor="list">List</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Communication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Availability Status</Label>
            <Select
              value={user.preferences.communication.availabilityStatus}
              onValueChange={(value) =>
                onUpdateSettings("communication", "availabilityStatus", value as "available" | "busy" | "away" | "offline")
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="busy">Busy</SelectItem>
                <SelectItem value="away">Away</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-reply">Auto Reply</Label>
            <Switch
              id="auto-reply"
              checked={user.preferences.communication.autoReply}
              onCheckedChange={(checked) =>
                onUpdateSettings("communication", "autoReply", checked)
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
