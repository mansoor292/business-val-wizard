import { TeamMember } from '../data/types';
import 'next-auth';

// Extend TeamMember for auth user
export interface AuthUser extends TeamMember {
  emailVerified: Date | null;
  passwordHash?: string; // In a real app, we'd have proper password handling
}

export interface AuthCredentials {
  email: string;
  password: string;
}

// Extend next-auth types
declare module 'next-auth' {
  interface User extends AuthUser {}
  
  interface Session {
    user: AuthUser;
  }
}
