"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { DASHBOARD_MENU_LIST } from "@/utils/site-data";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed top-0 left-0 h-screen bg-white w-full max-w-[240px] rounded-tr-3xl rounded-br-3xl">
      <div className="h-16 border-b flex items-center justify-start px-4">
        <Logo />
      </div>
      <nav className="flex flex-col items-start space-y-1 px-2 my-4">
        {DASHBOARD_MENU_LIST.map(({ label, path }, index: number) => {
          return (
            <Link
              href={path}
              key={index}
              className={twMerge(
                "capitalize hover:bg-gray-100 hover:text-gray-800 w-full rounded-md p-2",
                path === pathname ? "bg-indigo-600 text-white" : ""
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
