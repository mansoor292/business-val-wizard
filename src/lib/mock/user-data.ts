export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  department: string;
  avatar?: string;
  preferences: {
    notifications: {
      email: boolean;
      push: boolean;
      updates: boolean;
      reports: boolean;
    };
    display: {
      compactView: boolean;
      showMetrics: boolean;
      dashboardLayout: 'grid' | 'list';
    };
    communication: {
      availabilityStatus: 'available' | 'busy' | 'away' | 'offline';
      autoReply: boolean;
    };
  };
}

export const mockUserData: UserProfile = {
  id: '1',
  email: 'john.doe@business.com',
  name: 'John Doe',
  role: 'Project Manager',
  department: 'Operations',
  preferences: {
    notifications: {
      email: true,
      push: true,
      updates: true,
      reports: false,
    },
    display: {
      compactView: false,
      showMetrics: true,
      dashboardLayout: 'grid',
    },
    communication: {
      availabilityStatus: 'available',
      autoReply: false,
    },
  },
};
