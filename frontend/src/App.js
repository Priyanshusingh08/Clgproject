import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Admin from "./components/admin";
import { Toaster } from "react-hot-toast";
import Dashboard from "./components/admin/dashboard";
import User from "./components/user";
import AdminProfile from "./components/admin/profile";
import Profile from "./components/user/profile";
import Main from "./components/main";
import ResetPassword from "./components/main/Resetpassword";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import Home from "./components/main/home";
import Authorisor from "./components/authenticator";
import AdminAuthorisor from "./components/adminAuth";
import ManageVideo from "./components/user/manageVideo";
import Manageblog from "./components/user/manageBlog";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Browsing from "./components/main/browsing";
import AddBlog from "./components/user/addBlog";
import ViewBlog from "./components/user/viewBlog";
import Pricing from "./components/main/pricing";
import Manageuser from "./components/admin/manageuser";

function App() {
  TimeAgo.addDefaultLocale(en);
  const [darkTheme, setDarkTheme] = useState(false);

  const mytheme = createTheme({
    palette: {
      primary: {
        main: "#ab0000",
      },
    },
  });

  return (
    <ThemeProvider theme={mytheme}>
      <BrowserRouter>
        <Toaster position="top-center" />

        <Routes>
          <Route
            element={
              <AdminAuthorisor>
                <Admin />
              </AdminAuthorisor>
            }
            path="admin"
          >
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<AdminProfile />} path="profile" />
            <Route element={<Manageuser />} path="manageuser" />
          </Route>
          <Route
            element={
              <Authorisor>
                <User />
              </Authorisor>
            }
            path="user"
          >
            <Route element={<ManageVideo />} path="managevideo" />
            <Route element={<Manageblog />} path="manageblog" />
            <Route element={<AddBlog />} path="addblog" />
            <Route element={<Profile />} path="profile" />
            <Route element={<ViewBlog />} path="viewblog" />
            <Route element={<Browsing />} path="browsing" />
          </Route>
          <Route element={<Main />} path="main">
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<ResetPassword />} path="resetpassword" />
            <Route element={<Home />} path="home" />
            <Route element={<Pricing />} path="pricing" />
            <Route element={<Browsing />} path="browsing" />
            <Route element={<ViewBlog />} path="viewblog/:blogid" />

            {/* <Route element={<NotFound />} path="404" /> */}
          </Route>
          <Route element={<Navigate to="/main/home" />} path="/" />
          <Route element={<Navigate to="/main/404" />} path="*" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
