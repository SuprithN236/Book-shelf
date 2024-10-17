import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiCloudUpload,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import myLogo from "../assets/profile.jpg";
import { AuthContext } from "../context/AuthProvider";

function MySidebar() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="h-screen sticky left-0 top-0">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="Flowbite logo">
          {user?.displayName}
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item> */}
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload}>
              Upload a book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage a book
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            {/* <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item> */}
            <Sidebar.Item href="/logout" icon={HiTable}>
              Log out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default MySidebar;
