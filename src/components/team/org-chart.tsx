// "use client";

// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import { TeamMember } from "src/lib/data/types";
// import { useData } from "src/lib/data/context";
// import { useTeamMemberOperations } from "src/lib/data/context/operations/team-members";
// import { OrgChartNode } from './org-chart/org-chart-node';

// // Pre-compute relationships outside of component to avoid recalculation
// function buildMemberMaps(members: TeamMember[]) {
//   const emailToMember = new Map<string, TeamMember>();
//   const emailToChildren = new Map<string, TeamMember[]>();

//   // First pass: build email to member map
//   members.forEach(member => {
//     emailToMember.set(member.email, member);
//   });

//   // Second pass: build parent to children map
//   members.forEach(member => {
//     if (member.reportsTo) {
//       const children = emailToChildren.get(member.reportsTo) || [];
//       children.push(member);
//       emailToChildren.set(member.reportsTo, children);
//     }
//   });

//   return { emailToMember, emailToChildren };
// }

// export function OrgChart() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const data = useData();
//   const { teamMembers, listTeamMembers, createTeamMember, updateTeamMember } = useTeamMemberOperations(data);

//   const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);

//   // Memoize the member maps
//   const { emailToMember, emailToChildren } = useMemo(() => 
//     teamMembers ? buildMemberMaps(teamMembers) : { emailToMember: new Map(), emailToChildren: new Map() },
//     [teamMembers]
//   );

//   // Find root member
//   const rootMember = useMemo(() => 
//     teamMembers?.find(member => !member.reportsTo),
//     [teamMembers]
//   );

//   useEffect(() => {
//     let mounted = true;
    
//     async function loadMembers() {
//       if (!mounted) return;
      
//       try {
//         setIsLoading(true);
//         setError(null);
//         await listTeamMembers();
//       } catch (error) {
//         if (mounted) {
//           console.error('Failed to load team members:', error);
//           setError('Failed to load team members. Please try again.');
//         }
//       } finally {
//         if (mounted) {
//           setIsLoading(false);
//         }
//       }
//     }

//     loadMembers();
//     return () => { mounted = false; };
//   }, [listTeamMembers]);

//   const handleDragStart = useCallback((email: string) => {
//     if (isUpdating) return;
//     setDraggedNodeId(email);
//   }, [isUpdating]);

//   const handleDragOver = useCallback((email: string) => {
//     if (isUpdating) return;
//   }, [isUpdating]);

//   const handleDrop = useCallback(async (targetEmail: string) => {
//     if (isUpdating || !draggedNodeId || draggedNodeId === targetEmail) return;

//     try {
//       setIsUpdating(true);
//       const draggedMember = emailToMember.get(draggedNodeId);
//       if (draggedMember) {
//         await updateTeamMember(draggedMember.id, { reportsTo: targetEmail });
//       }
//     } catch (error) {
//       console.error('Failed to update reporting structure:', error);
//       setError('Failed to update reporting structure. Please try again.');
//     } finally {
//       setIsUpdating(false);
//       setDraggedNodeId(null);
//     }
//   }, [draggedNodeId, emailToMember, updateTeamMember, isUpdating]);

//   const handleAddMember = useCallback(async (newMember: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>) => {
//     if (isUpdating) return;

//     try {
//       setIsUpdating(true);
//       await createTeamMember(newMember as Omit<TeamMember, 'id'>);
//     } catch (error) {
//       console.error('Failed to add team member:', error);
//       setError('Failed to add team member. Please try again.');
//     } finally {
//       setIsUpdating(false);
//     }
//   }, [createTeamMember, isUpdating]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-[200px]">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-[200px] text-red-500">
//         {error}
//       </div>
//     );
//   }

//   if (!teamMembers?.length) {
//     return (
//       <div className="flex items-center justify-center min-h-[200px] text-gray-500">
//         No team members found. Add a team member to get started.
//       </div>
//     );
//   }

//   if (!rootMember) {
//     return (
//       <div className="flex items-center justify-center min-h-[200px] text-red-500">
//         No root member found. Please ensure one team member is designated as the root.
//       </div>
//     );
//   }

//   return (
//     <div className={`p-12 bg-gray-50 min-h-screen overflow-x-auto ${isUpdating ? 'cursor-wait' : ''}`}>
//       <div className="inline-block min-w-max">
//         <OrgChartNode
//           member={rootMember}
//           children={emailToChildren.get(rootMember.email) || []}
//           childrenMap={emailToChildren}
//           onDragStart={handleDragStart}
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//           isBeingDragged={draggedNodeId === rootMember.email}
//           onAddMember={handleAddMember}
//         />
//       </div>
//     </div>
//   );
// }
