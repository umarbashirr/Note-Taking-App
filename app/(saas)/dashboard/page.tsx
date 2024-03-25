"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const changeRoute = () => {
      if (pathname === "/dashboard") {
        router.replace("/dashboard/notes");
      }
    };

    changeRoute();
  }, []);

  return <div>Dashboard Page</div>;
};

export default DashboardPage;
