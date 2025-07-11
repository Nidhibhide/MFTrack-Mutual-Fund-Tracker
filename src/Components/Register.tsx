"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/api";
import Image from "next/image";
import dollar from "@/images/dollor.jpg";
import mutualFund from "@/images/mutualFund.jpeg";

// Zod validation schema
const schema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name should not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Only alphabets and spaces are allowed"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(10, "Password must not exceed 10 characters")
    .regex(/^\d+$/, "Password must contain digits only"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .regex(/^\d+$/, "Phone number must contain digits only"),
});

type FormData = z.infer<typeof schema>;

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await registerUser(data);
      console.log(response);
      router.push("/login");
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex bg-slate-200">
      <div className="lg:w-[50%] w-full rounded-tl-2xl rounded-bl-2xl px-4 md:px-12 bg-white">
        <div className="h-full flex flex-col justify-center">
          <div className="flex  items-center md:mb-10 mb-6">
            <Image
              src={dollar}
              alt="money-icon"
              width={80}
              height={80}
              className="object-fill"
            />
            <p className="font-extrabold text-3xl md:text-4xl">MFTrack</p>
          </div>
          <p className="font-semibold text-2xl md:text-3xl mb-14">
            Sign up to track your mutual funds.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-12">
            {/* Full Name */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="fullName" className="font-semibold">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                {...register("fullName")}
                className="border px-4 py-2 rounded-md"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="border px-4 py-2 rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="phoneNumber" className="font-semibold">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
                {...register("phoneNumber")}
                className="border px-4 py-2 rounded-md"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="border px-4 py-2 rounded-md"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white py-3 font-medium rounded-xl hover:bg-gray-700 transition duration-500 w-full"
            >
              {loading ? "Loading..." : "Create Account"}
            </button>
          </form>

          <p className="md:text-lg text-base">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>

 
      {/* Right Side Content */}
      <div className="w-[50%] lg:flex hidden flex-col items-center justify-center bg-gray-900 text-white rounded-3xl p-10">
        <h2 className="text-5xl font-semibold mb-8">
          Your Mutual Fund Companion
        </h2>
        <p className="text-lg text-gray-300 font-normal mb-6">
          Track, manage, and grow your investments with real-time insights and
          personalized reports.
        </p>
        <div className="flex justify-center">
          <div className="w-full h-[500px] shadow-lg rounded-2xl overflow-hidden">
            <Image
              src={mutualFund}
              alt="mutual fund overview"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
