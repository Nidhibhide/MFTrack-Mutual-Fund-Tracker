"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/Components/redux/store";
import { useEffect } from "react";
import Dashboard from "@/Components/Dashboard/Dashboard";

const publicRoutes = ["/login", "/register"];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const pathname = usePathname();
  const router = useRouter();

  const isPublic = publicRoutes.includes(pathname);

  useEffect(() => {
    if (!isAuthenticated && !isPublic) {
      router.push("/register");
    }
  }, [isAuthenticated, isPublic]);

  if (isPublic) return <>{children}</>;

  if (isAuthenticated) {
    return (
      <div className="w-screen h-screen flex">
        <div>
          <Dashboard />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    );
  }

  return null;
}
