"use client";
import { SessionProvider } from "next-auth/react";
type Props = {
  children?: React.ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
  return <SessionProvider basePath="/api/staff-auth/auth">{children}</SessionProvider>;
};