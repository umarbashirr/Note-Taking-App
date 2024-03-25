import Sidebar from "@/components/dashboard/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div>
        <Sidebar />
        <main className="w-full max-w-[calc(100%-280px)] ml-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
