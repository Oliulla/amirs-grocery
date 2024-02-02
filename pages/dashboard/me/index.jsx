import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const MyDashboardMainPage = () => {
  return (
    <ProtectedRoute>
      <div>protected content</div>
    </ProtectedRoute>
  );
};

export default MyDashboardMainPage;

MyDashboardMainPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
