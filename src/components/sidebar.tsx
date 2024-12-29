'use client';

import { cn } from "src/lib/utils";
import { Button } from "src/components/ui/button";
import { ScrollArea } from "src/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "src/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "src/hooks/use-mobile";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function Sidebar({ className, activeTab = 'dashboard', onTabChange }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const SidebarContent = () => (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Navigation
          </h2>
          <div className="space-y-1">
            <Button
              variant={activeTab === "dashboard" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onTabChange?.("dashboard")}
            >
              Dashboard
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Workspace
          </h2>
          <div className="space-y-1">
            <Button
              variant={activeTab === "projects" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onTabChange?.("projects")}
            >
              Projects
            </Button>
            <Button
              variant={activeTab === "team" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onTabChange?.("team")}
            >
              Team Members
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <ScrollArea className="h-full">
            <SidebarContent />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden border-r bg-sidebar-background md:block w-64">
      <ScrollArea className="h-full">
        <SidebarContent />
      </ScrollArea>
    </div>
  );
}
