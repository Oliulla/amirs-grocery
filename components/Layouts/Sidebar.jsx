import { useSidebarContext } from "@/context/SidebarContext";
import { Sidebar } from "flowbite-react";
import Link from "next/link";
// import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmLeft,
  // HiChartPie,
  // HiInbox,
  HiShoppingBag,
  // HiTable,
  HiOutlineUserCircle,
  // HiViewBoards,
  // HiUser
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar = function () {
  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16"
      )}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} href="#" icon={HiOutlineUserCircle}>
            My Profile
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item> */}
          {/* <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item> */}
          {/* <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item> */}
          <Sidebar.Item as={Link} href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmLeft}>
            Sign Out
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item> */}
        </Sidebar.ItemGroup>
        {/* <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup> */}
      </Sidebar.Items>
    </Sidebar>
  );
};
