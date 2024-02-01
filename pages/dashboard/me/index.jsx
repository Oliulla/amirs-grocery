import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";

const MyDashboardMainPage = () => {
  return <div> dashboard me</div>;
};

export default MyDashboardMainPage;

MyDashboardMainPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
