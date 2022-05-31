import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Admin;
