export const kpiData = [
  {
    id: 'L1',
    level: 'L1',
    title: 'Overall Business Performance',
    frequency: 'Yearly',
    owner: 'Sarah Chen',
    ownerInitials: 'ML',
    target: 85,
    current: 82,
    children: [
      {
        id: 'L2-1',
        level: 'L2',
        title: 'Production Efficiency',
        frequency: 'Quarterly',
        owner: 'James Wilson',
        ownerInitials: 'GB',
        target: 1000,
        current: 950,
        children: [
          {
            id: 'L3-1',
            level: 'L3',
            title: 'Manufacturing Quality',
            frequency: 'Weekly',
            owner: 'Maria Lopez',
            ownerInitials: 'A',
            target: 98,
            current: 96.5,
            children: [
              {
                id: 'L4-1',
                level: 'L4',
                title: 'Defect Rate Control',
                frequency: 'Quarterly',
                owner: 'Alex Kim',
                ownerInitials: 'PC',
                target: 2,
                current: 1.8,
                children: [
                  {
                    id: 'L5-1',
                    level: 'L5',
                    title: 'Quality Inspection Process',
                    frequency: 'Daily',
                    owner: 'Emma Davis',
                    ownerInitials: 'ED',
                    target: 100,
                    current: 95,
                    children: [
                      {
                        id: 'L6-1',
                        level: 'L6',
                        title: 'Inspection Checklist Completion',
                        frequency: 'Daily',
                        owner: 'Tom Brown',
                        ownerInitials: 'TB',
                        target: 100,
                        current: 98,
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'L3-2',
            level: 'L3',
            title: 'Resource Utilization',
            frequency: 'Quarterly',
            owner: 'Pat Johnson',
            ownerInitials: 'ML',
            target: 90,
            current: 85,
            children: []
          }
        ]
      },
      {
        id: 'L2-2',
        level: 'L2',
        title: 'Customer Satisfaction',
        frequency: 'Monthly',
        owner: 'Lisa Wang',
        ownerInitials: 'LW',
        target: 95,
        current: 89,
        children: [
          {
            id: 'L3-3',
            level: 'L3',
            title: 'Response Time',
            frequency: 'Weekly',
            owner: 'David Park',
            ownerInitials: 'DP',
            target: 24,
            current: 28,
            children: []
          }
        ]
      }
    ]
  }
];

export const issuesData = [
  {
    title: 'Quality Control Process Review',
    priority: 'High',
    status: 'In Progress',
    assignee: 'Alex Kim',
    dueDate: '2024-07-20'
  },
  {
    title: 'Customer Feedback Implementation',
    priority: 'Medium',
    status: 'Pending',
    assignee: 'Lisa Wang',
    dueDate: '2024-07-25'
  }
];

export const actionItems = [
  {
    title: 'Determine Current Actual Retention',
    dueDate: '2024-07-08',
    assignee: 'C-Tester Lugo',
    status: 'Plan'
  },
  {
    title: 'Schedule Q-Quarter Callout Rhythm with Leadership Team',
    dueDate: '2024-07-15',
    assignee: 'Maria Lopez',
    status: 'In Progress'
  }
];

export const businessDrivers = [
  { name: 'You', percentage: 85, color: 'text-green-500' },
  { name: 'Leadership', percentage: 92, color: 'text-blue-500' },
  { name: 'Employees', percentage: 78, color: 'text-purple-500' },
  { name: 'Customers', percentage: 88, color: 'text-yellow-500' },
  { name: 'Financial', percentage: 95, color: 'text-red-500' },
  { name: 'Cash', percentage: 82, color: 'text-indigo-500' },
  { name: 'Growth', percentage: 73, color: 'text-pink-500' },
];
