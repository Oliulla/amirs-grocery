import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import { DashboardNavbar } from "../Header/Header";
import { DashboardSidebar } from "./Sidebar";
import { twMerge } from "tailwind-merge";

const DashboardLayout = function ({ children }) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
};

const DashboardLayoutContent = function ({ children }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar />
        <div
          id="main-content"
          className={twMerge(
            "relative min-h-screen w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;