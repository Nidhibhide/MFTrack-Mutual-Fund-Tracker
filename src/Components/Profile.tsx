"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Components/redux/store";
import { IUser } from "@/lib/types";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user) as IUser | null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="w-full max-w-lg p-8 rounded-xl shadow-md border border-gray-200 bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white text-4xl font-bold rounded-full flex items-center justify-center shadow-md">
            {user?.fullName?.charAt(0).toUpperCase() || "J"}
          </div>
          <h1 className="text-2xl font-semibold mt-4 text-gray-800">
            My Profile
          </h1>
          <p className="text-sm text-gray-500">Basic account details</p>
        </div>

        <div className="mt-8 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <div className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 shadow-sm">
              {user?.fullName || "John Doe"}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <div className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 shadow-sm">
              {user?.email || "johndoe@gmail.com"}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <div className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 shadow-sm">
              {user?.phoneNumber || "1234567890"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
