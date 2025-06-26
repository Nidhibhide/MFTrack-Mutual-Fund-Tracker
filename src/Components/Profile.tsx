"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
  fullName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
});

type FormData = z.infer<typeof schema>;

const Profile = () => {
  const {
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/profile/me");
        reset(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, [reset]);

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-lg  p-8 space-y-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-purple-600 text-white text-4xl font-bold rounded-full flex items-center justify-center shadow-lg">
            N
          </div>
          <h1 className="text-2xl font-semibold mt-4">My Profile</h1>
          <p className="text-sm text-gray-500">View your basic details</p>
        </div>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              readOnly
              {...register("fullName")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 shadow-sm focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              readOnly
              {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 shadow-sm focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              readOnly
              {...register("phoneNumber")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 shadow-sm focus:outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
