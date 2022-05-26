import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
// import Sidebar from "./sidebar";
const User = () => {
  // const sidebarOptions = [
  //   {
  //     name: "Manage Profile",
  //     icon: <AccountCircle />,
  //     link: "/user/profile",
  //   },
  //   {
  //     name: "Manage Webpage",
  //     icon: <Pages />,
  //     link: "/user/managewebpage",
  //   },
  // ];

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default User;
