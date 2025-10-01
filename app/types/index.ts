export type PropertyType = 'house' | 'apartment' | 'land';
export type PropertyStatus = 'sale' | 'rent';
export type UserRole = 'buyer' | 'seller' | 'agent';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: PropertyType;
  status: PropertyStatus;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  images: string[];
  agentId: string;
  agentName: string;
  agentContact: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => void;
  signup: (name: string, email: string, password: string, role: UserRole) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
