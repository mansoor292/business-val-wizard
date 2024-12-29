'use client';

import React from "react";
import { useAuth } from "src/lib/auth/auth-context"
import { Button } from "src/components/ui/button"
import { Avatar, AvatarFallback } from "src/components/ui/avatar"
import { useTheme } from "next-themes"
import { 
  Home,
  MessageCircle,
  Users,
  BookOpen,
  BarChart2,
  Settings,
  User,
  LogOut,
  Bell,
  Clock,
  HelpCircle,
  Menu,
  X,
  Sun,
  Moon,
  FolderKanban
} from "lucide-react"
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

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export type ActiveView = 'dashboard' | 'agents' | 'projects' | 'team' | 'training' | 'analytics';
interface HeaderProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
}

export function Header({ activeView, onViewChange }: HeaderProps) {

  const getNavItems = (): NavItem[] => [
    { 
      icon: <Home className="w-5 h-5" />, 
      label: 'Dashboard',
      active: activeView === 'dashboard',
      onClick: () => onViewChange('dashboard')
    },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      label: 'Agents',
      active: activeView === 'agents',
      onClick: () => onViewChange('agents')
    },
    { 
      icon: <FolderKanban className="w-5 h-5" />, 
      label: 'Projects',
      active: activeView === 'projects',
      onClick: () => onViewChange('projects')
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      label: 'Team',
      active: activeView === 'team',
      onClick: () => onViewChange('team')
    },
    { 
      icon: <BookOpen className="w-5 h-5" />, 
      label: 'Training',
      active: activeView === 'training',
      onClick: () => onViewChange('training')
    },
    { 
      icon: <BarChart2 className="w-5 h-5" />, 
      label: 'Analytics',
      active: activeView === 'analytics',
      onClick: () => onViewChange('analytics')
    },
  ];
  const { isAuthenticated, user, logout } = useAuth()
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(mockUserData)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Mobile Navigation Overlay */}
      <div className={`
        fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300
        ${isMobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `} onClick={() => setIsMobileNavOpen(false)} />

      {/* Mobile Navigation Drawer */}
      <div className={`
        fixed inset-y-0 left-0 w-64 bg-background z-50 lg:hidden transform transition-transform duration-300 ease-in-out
        ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-14 border-b border-border flex items-center justify-between px-4">
          <span className="font-semibold">Navigation</span>
          <button 
            onClick={() => setIsMobileNavOpen(false)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          {getNavItems().map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md
                ${item.active 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:bg-accent'}`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex h-14 items-center px-4 justify-between">
        {/* Left Nav */}
        <div className="flex items-center space-x-8">
          <button 
            className="lg:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex items-center space-x-6">
            {getNavItems().map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-md
                  ${item.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:bg-accent'}`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-4">
          <button
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label="View history"
          >
            <Clock className="w-5 h-5" />
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label="View notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
          <button 
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label="Get help"
          >
            <HelpCircle className="w-5 h-5" />
          </button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center space-x-2 p-1 rounded-md hover:bg-slate-700 cursor-pointer">
                  <Avatar className="bg-purple-500">
                    <AvatarFallback className="text-white">
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
