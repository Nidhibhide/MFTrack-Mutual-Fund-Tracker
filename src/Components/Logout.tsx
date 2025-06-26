"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearUser } from "@/Components/redux/features/authSlice";

const Logout: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearUser());

    router.replace("/register");
  }, [dispatch, router]);

  return null;
};

export default Logout;
