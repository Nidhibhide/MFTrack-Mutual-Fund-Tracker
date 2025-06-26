"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Components/redux/store";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { FaClipboard, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { ISidebarLink } from "@/lib/types";

const Sidebar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const role = "USER";
  const initial = user?.fullName?.charAt(0).toUpperCase() || "J";

  const sidebarLinks: ISidebarLink[] = [
    {
      to: "/portfolio",
      label: "Portfolio",
      icon: <IoStatsChartSharp size={28} />,
    },
    { to: "/reports", label: "Reports", icon: <FaClipboard size={28} /> },
    { to: "/me", label: "Profile", icon: <FaUserAlt size={28} /> },
    { to: "/logout", label: "Logout", icon: <MdOutlineLogout size={28} /> },
  ];

  return (
    <div className="w-72 h-full">
      <div className="w-full h-full flex flex-col text-white">
        {/* Profile Section */}
        <div className="h-[150px] bg-blue-950 flex justify-center items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex justify-center items-center">
            <span className="text-3xl font-bold text-blue-950">{initial}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold capitalize">
              {user?.fullName || "John Doe"}
            </h1>
            <p className="text-base font-medium text-green-500">{role}</p>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="h-full bg-black py-6">
          <ul className="flex flex-col text-xl font-medium">
            {sidebarLinks.map((link) => (
              <li
                key={link.to}
                className="flex items-center gap-2 cursor-pointer hover:bg-[#a9a9a9] py-4 justify-center"
              >
                <Link href={link.to} className="flex items-center gap-2">
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
