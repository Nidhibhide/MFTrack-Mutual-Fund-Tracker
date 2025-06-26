"use client";
import React, { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import Sidebar from "@/Components/Dashboard/Components/Sidebar";

const Dashboard: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="flex w-full h-full">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="lg:hidden absolute top-4 left-4 z-50">
        <button onClick={() => setShowSidebar(true)}>
          <IoMenu size={28} />
        </button>
      </div>

      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-72 bg-black h-full">
            <Sidebar />
          </div>

          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={() => setShowSidebar(false)}
          >
            <IoCloseSharp size={32} />
          </button>

          <div
            className="flex-1 bg-black/40"
            onClick={() => setShowSidebar(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
