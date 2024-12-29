"use client";

import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TeamMember, TeamMember as BaseTeamMember } from "src/lib/data/types";
import { AddTeamMemberDialog } from "./add-team-member-dialog";
import { TeamMemberCard } from "./team-member-card";
import { TeamMemberChat } from "./team-member-chat";
import { Button } from "../ui/button";
import { MessageCircle, Plus } from "lucide-react";

interface OrgChartProps {
  teamMembers: BaseTeamMember[];
  onAddMember?: (member: Omit<TeamMember, "id" | "createdAt" | "updatedAt">) => void;
}

// Extend TeamMember type to include reports for hierarchy
interface TeamMemberNode extends BaseTeamMember {
  reports?: TeamMemberNode[];
}

interface OrgChartNodeProps {
  member: TeamMemberNode;
  onMemberClick: (member: TeamMemberNode, event: React.MouseEvent) => void;
  onAddClick: (parentMember: TeamMemberNode) => void;
  onChatClick: (member: TeamMemberNode, event: React.MouseEvent) => void;
}

// Build the reporting hierarchy using a top-down approach
function buildHierarchy(members: BaseTeamMember[]): TeamMemberNode | null {
  // Find the root member (no reportsTo)
  const rootMember = members.find(m => !m.reportsTo);
  if (!rootMember) return null;

  // Helper function to recursively build the hierarchy
  function buildNode(member: BaseTeamMember, availableMembers: BaseTeamMember[]): TeamMemberNode {
    // Create node with reports array
    const node: TeamMemberNode = {
      ...member,
      reports: []
    };

    // Find all direct reports
    const directReports = availableMembers.filter(m => m.reportsTo === member.email);
    
    // Remove these members from available pool and process them
    directReports.forEach(report => {
      const reportIndex = availableMembers.findIndex(m => m.email === report.email);
      if (reportIndex !== -1) {
        // Remove the member from available pool
        const [reportMember] = availableMembers.splice(reportIndex, 1);
        // Process this report and add to current node's reports
        node.reports!.push(buildNode(reportMember, availableMembers));
      }
    });

    return node;
  }

  // Start with all members except root
  const availableMembers = members.filter(m => m.email !== rootMember.email);
  
  // Build the hierarchy starting from root
  return buildNode(rootMember, availableMembers);
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-orange-200 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-orange-400 rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

const OrgChartNode: React.FC<OrgChartNodeProps> = ({ member, onMemberClick, onAddClick, onChatClick }) => {
  const displayName = member.name || member.email.split('@')[0];
  return (
    <div className="flex flex-col items-center">
      <div 
        className="member-card flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
        onClick={(e) => onMemberClick(member, e)}
      >
        <div className="relative">
          <Avatar className="w-20 h-20 mb-2 border-2 border-orange-400">
            <AvatarImage src={member.avatar || ''} alt={displayName} />
            <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="secondary"
            className="absolute -right-2 -bottom-1 h-7 w-7 rounded-full shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              onChatClick(member, e);
            }}
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-center">
          <h3 className="font-medium text-lg">{displayName}</h3>
          <p className="text-sm text-gray-500">{member.role || 'Team Member'}</p>
        </div>
      </div>
      
      <div className="connector-line h-8 w-px bg-orange-400 my-4 relative">
        <Button
          size="icon"
          variant="outline"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            onAddClick(member);
          }}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      {member.reports && member.reports.length > 0 && (
        <div className="reports-container relative">
          <div className="horizontal-line absolute top-0 left-1/2 h-px bg-orange-400" 
               style={{
                 width: `${Math.max((member.reports.length - 1) * 240, 0)}px`,
                 transform: 'translateX(-50%)'
               }}
          />
          <div className="flex gap-x-16 relative pt-4">
            {member.reports.map((report) => (
              <div key={report.id} className="flex flex-col items-center">
                  <OrgChartNode 
                    member={report} 
                    onMemberClick={onMemberClick}
                    onAddClick={onAddClick}
                    onChatClick={onChatClick}
                  />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function OrgChart({ teamMembers, onAddMember }: OrgChartProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMemberNode | null>(null);
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number } | null>(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState<TeamMemberNode | null>(null);
  const [chatMember, setChatMember] = useState<TeamMemberNode | null>(null);
  const [chatPosition, setChatPosition] = useState<{ x: number; y: number } | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isClickInsideComponent = (
        target.closest('.member-card') || 
        target.closest('.team-member-card') ||
        target.closest('.team-member-chat')
      );

      if (!isClickInsideComponent) {
        setSelectedMember(null);
        setCardPosition(null);
        setChatMember(null);
        setChatPosition(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const calculateOptimalPosition = (
    elementRect: DOMRect,
    chartRect: DOMRect,
    componentWidth: number,
    componentHeight: number
  ) => {
    const centerX = elementRect.left + elementRect.width / 2;
    const centerY = elementRect.top + elementRect.height / 2;
    
    // Calculate distances to viewport edges
    const distanceToRight = chartRect.right - centerX;
    const distanceToLeft = centerX - chartRect.left;
    const distanceToBottom = chartRect.bottom - centerY;
    const distanceToTop = centerY - chartRect.top;
    
    // Determine optimal position
    const position = { x: 0, y: 0 };
    
    // Horizontal positioning
    if (distanceToRight > distanceToLeft) {
      // More space on right
      position.x = elementRect.right - chartRect.left + 20;
    } else {
      // More space on left
      position.x = elementRect.left - chartRect.left - componentWidth - 20;
    }
    
    // Vertical positioning
    if (distanceToBottom > distanceToTop) {
      // More space below
      position.y = elementRect.bottom - chartRect.top + 20;
    } else {
      // More space above
      position.y = elementRect.top - chartRect.top - componentHeight - 20;
    }
    
    // Ensure position is within bounds
    position.x = Math.max(20, Math.min(position.x, chartRect.width - componentWidth - 20));
    position.y = Math.max(20, Math.min(position.y, chartRect.height - componentHeight - 20));
    
    return position;
  };

  const handleChatClick = (member: TeamMemberNode, event: React.MouseEvent) => {
    event.stopPropagation();
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const chartRect = chartRef.current?.getBoundingClientRect();
    
    if (chartRect) {
      if (chatMember?.id === member.id) {
        setChatMember(null);
        setChatPosition(null);
      } else {
        const position = calculateOptimalPosition(rect, chartRect, 384, 400); // w-96 = 384px, height = 400px
        setChatMember(member);
        setChatPosition(position);
      }
    }
  };

  const handleMemberClick = (member: TeamMemberNode, event: React.MouseEvent) => {
    event.stopPropagation();
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const chartRect = chartRef.current?.getBoundingClientRect();
    
    if (chartRect) {
      if (selectedMember?.id === member.id) {
        setSelectedMember(null);
        setCardPosition(null);
      } else {
        const position = calculateOptimalPosition(rect, chartRect, 320, 300); // w-80 = 320px, height ≈ 300px
        setSelectedMember(member);
        setCardPosition(position);
      }
    }
  };
  
  const rootMember = useMemo(() => {
    if (!teamMembers?.length) return null;
    return buildHierarchy(teamMembers);
  }, [teamMembers]);

  if (!teamMembers?.length) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-gray-500">
        No team members found. Add team members to see the organization chart.
      </div>
    );
  }

  if (!rootMember) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-gray-500">
        Please ensure one team member is designated as the organization head.
      </div>
    );
  }

  const handleAddClick = (parentMember: TeamMemberNode) => {
    setSelectedParent(parentMember);
    setAddDialogOpen(true);
  };

  const handleAddMember = (member: Omit<TeamMember, "id" | "createdAt" | "updatedAt">) => {
    onAddMember?.(member);
  };

  return (
    <div className="p-12 bg-white min-h-screen overflow-x-auto relative" ref={chartRef}>
      <AddTeamMemberDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        reportsTo={selectedParent?.email || null}
        onAdd={handleAddMember}
      />
      <div className="inline-block min-w-max">
        <OrgChartNode 
          member={rootMember} 
          onMemberClick={handleMemberClick}
          onAddClick={handleAddClick}
          onChatClick={handleChatClick}
        />
      </div>
      {selectedMember && cardPosition && (
        <div 
          className="absolute w-80 z-50 team-member-card"
          style={{ 
            left: `${cardPosition.x}px`,
            top: `${cardPosition.y}px`,
            maxHeight: 'calc(100vh - 40px)',
            overflow: 'auto'
          }}
        >
          <TeamMemberCard member={selectedMember} />
        </div>
      )}
      {chatMember && chatPosition && (
        <div 
          className="absolute w-96 z-50 team-member-chat"
          style={{ 
            left: `${chatPosition.x}px`,
            top: `${chatPosition.y}px`,
            maxHeight: 'calc(100vh - 40px)',
            overflow: 'auto'
          }}
        >
          <TeamMemberChat member={chatMember} />
        </div>
      )}
    </div>
  );
}
