"use client";
import React, { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import Sidebar from "@/Components/Dashboard/Components/Sidebar";
// import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex w-full h-full ">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="lg:hidden absolute top-4 left-4 z-50">
        <button onClick={() => setShowSidebar(true)}>
          <IoMenu size={28} />
        </button>
      </div>

      {/* ✅ Sidebar overlay for small screens */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar slides in from the left */}
          <div className="w-72 bg-black h-full">
            <Sidebar />
          </div>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={() => setShowSidebar(false)}
          >
            <IoCloseSharp size={32} />
          </button>

          {/* Transparent overlay to close sidebar when clicked outside */}
          <div
            className="flex-1 bg-black/40 "
            onClick={() => setShowSidebar(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
