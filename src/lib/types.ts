import { JSX } from "react";

export type Fund = {
  id: number;
  fundName: string;
  totalUnits: number;
  currentNAV: number;
  currentValue: number;
};

export type SidebarLink = {
  to: string;
  label: string;
  icon: JSX.Element;
};

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
}
