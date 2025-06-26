"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/lib/api";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(10, "Password must not exceed 10 characters")
    .regex(/^\d+$/, "Password must contain digits only"),
});

type FormData = z.infer<typeof schema>;
const router = useRouter();
const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await loginUser(data);
      console.log(response);
      router.push("/dashboard");
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex bg-slate-200">
      <div className="lg:w-[50%] w-full rounded-tl-2xl rounded-bl-2xl px-4 md:px-12 bg-white">
        <div className="h-full flex flex-col justify-center">
          <div className="flex  items-center md:mb-10 mb-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/572/811/original/vector-dollar-sign-money-icon.jpg"
              className="h-20 w-20 object-fill"
              alt="money-icon"
            />
            <p className="font-extrabold text-3xl md:text-4xl">MFTrack</p>
          </div>
          <p className="font-semibold text-2xl md:text-3xl mb-14">
            Sign in to track your mutual funds.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-12">
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

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white py-3 font-medium rounded-xl md:mb-4 mb-2 hover:bg-gray-700 hover:shadow-md transition duration-500 w-full"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>

      <div className="w-[50%] lg:block hidden">
        <img
          src="https://wallpapercave.com/wp/wp2665214.jpg"
          alt="mutual fund tracker"
          className="h-full w-full object-fill rounded-tr-2xl rounded-br-2xl"
        />
      </div>
    </div>
  );
};

export default Login;
