"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // clear token or session
    // localStorage.removeItem("token");

    // redirect to register
    router.replace("/register");
  }, [router]);

  return null;
};

export default Logout;
