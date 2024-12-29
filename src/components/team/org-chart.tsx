"use client";

import React, { useMemo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TeamMember as BaseTeamMember } from "src/lib/data/types";

interface OrgChartProps {
  teamMembers: BaseTeamMember[];
}

// Extend TeamMember type to include reports for hierarchy
interface TeamMemberNode extends BaseTeamMember {
  reports?: TeamMemberNode[];
}

interface OrgChartNodeProps {
  member: TeamMemberNode;
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

const OrgChartNode: React.FC<OrgChartNodeProps> = ({ member }) => {
  const displayName = member.name || member.email.split('@')[0];
  return (
    <div className="flex flex-col items-center">
      <div className="member-card flex flex-col items-center">
        <Avatar className="w-20 h-20 mb-2 border-2 border-orange-400">
          <AvatarImage src={member.avatar || ''} alt={displayName} />
          <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h3 className="font-medium text-lg">{displayName}</h3>
          <p className="text-sm text-gray-500">{member.role || 'Team Member'}</p>
        </div>
      </div>
      
      {member.reports && member.reports.length > 0 && (
        <>
          <div className="connector-line h-8 w-px bg-orange-400 my-4"></div>
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
                  <OrgChartNode member={report} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function OrgChart({ teamMembers }: OrgChartProps) {
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

  return (
    <div className="p-12 bg-white min-h-screen overflow-x-auto">
      <div className="inline-block min-w-max">
        <OrgChartNode member={rootMember} />
      </div>
    </div>
  );
}
