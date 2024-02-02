import AdminProfile from "@/components/AdminProfile/AdminProfile";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const MyDashboardMainPage = () => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto">
        <AdminProfile />
      </div>
    </ProtectedRoute>
  );
};

export default MyDashboardMainPage;

MyDashboardMainPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
