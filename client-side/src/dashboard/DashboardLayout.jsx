import { Sidebar } from "flowbite-react";
import React from "react";
import { Outlet } from "react-router-dom";
import MySidebar from "./MySidebar";

function DashboardLayout() {
  return (
    <div className="flex">
      <MySidebar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
