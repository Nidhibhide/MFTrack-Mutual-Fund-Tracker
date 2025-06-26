import { JSX } from "react";

export type IFund = {
  id: number;
  fundName: string;
  totalUnits: number;
  currentNAV: number;
  currentValue: number;
};

export type ISidebarLink = {
  to: string;
  label: string;
  icon: JSX.Element;
};

export interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}

export interface IUser {
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface ITransaction {
  id: number;
  fundName: string;
  action: "BUY" | "SELL";
  units: number;
  nav: number;
  totalValue: number;
  date: string;
}
