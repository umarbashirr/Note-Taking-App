"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DashboardHeader = ({ title }: { title: string }) => {
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      const response = await fetch("/api/v1/auth/logout", {
        method: "POST",
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        router.replace("/");
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <header className="h-16 flex items-center justify-between gap-4 pr-6">
      <h1 className="text-2xl font-medium">{title}</h1>
      <button
        onClick={logoutHandler}
        className="logout border rounded-md flex items-center justify-start space-x-2 py-2 px-5 bg-white"
      >
        <LogOut width={18} height={18} />
        <span className="inline-block">Logout</span>
      </button>
    </header>
  );
};

export default DashboardHeader;
