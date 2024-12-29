import { useAuth } from "src/lib/auth/auth-context"
import { Button } from "src/components/ui/button"
import { Avatar, AvatarFallback } from "src/components/ui/avatar"
import { useTheme } from "next-themes"
import { Moon, Sun, Settings, User, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "src/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "src/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { UserProfile } from "./user-profile"
import { UserSettings } from "./user-settings"
import { mockUserData, UserProfile as UserProfileType } from "src/lib/mock/user-data"
import { useState } from "react"

type PreferencesSection = keyof UserProfileType['preferences'];
type PreferenceValue<T extends PreferencesSection> = UserProfileType['preferences'][T];

export function Header() {
  const { isAuthenticated, user, logout } = useAuth()
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(mockUserData)

  const handleUpdateSettings = <T extends PreferencesSection>(
    section: T,
    key: keyof PreferenceValue<T>,
    value: PreferenceValue<T>[keyof PreferenceValue<T>]
  ) => {
    setCurrentUser(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [section]: {
          ...prev.preferences[section],
          [key]: value
        }
      }
    }))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-4">
        <div className="flex flex-1">
          <span className="text-xl font-bold">Business Value Wizard</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <span className="text-sm text-muted-foreground">
                    {currentUser.email}
                  </span>
                  <Avatar>
                    <AvatarFallback>
                      {currentUser.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <Dialog>
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Profile</DialogTitle>
                    </DialogHeader>
                    <UserProfile user={currentUser} />
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Settings</SheetTitle>
                    </SheetHeader>
                    <UserSettings 
                      user={currentUser} 
                      onUpdateSettings={handleUpdateSettings}
                    />
                  </SheetContent>
                </Sheet>

                <DropdownMenuSeparator />
                
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="default"
              onClick={() => router.push('/login')}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
