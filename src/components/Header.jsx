import { useState } from "react";
import Button from "./common/Button";
import HeaderLink from "./common/HeaderLink";
import Logo from "./common/Logo";
import { FaBars } from "react-icons/fa6";
import { getTailwindColor } from "../utils/getTailwindColor";
import { Link } from "react-router-dom";
import { Sidebar } from "./";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import authService from "../services/authService";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.auth.loginStatus);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = async () => {
    const result = await authService.logout();
    if (result) dispatch(logout());
  };

  const headerLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blogs",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="flex bg-primary justify-between content-center items-center h-20 md-2:px-10 px-5">
        <div className="flex-1 flex items-center">
          <button className="md-2:hidden" onClick={toggleSidebar}>
            <FaBars size="24" color={getTailwindColor("secondary")} />
          </button>
          <Link to="/" className="md-2:mx-0 mx-5">
            <Logo width="100px" />
          </Link>
        </div>
        <div className="flex">
          <div className="md-2:flex hidden flex-1 space-x-12 items-center mr-12">
            {headerLinks.map((link) => (
              <HeaderLink key={link.name} path={link.path}>
                {link.name}
              </HeaderLink>
            ))}
          </div>
          <div className="flex flex-1 items-center">
            {!isLogged ? (
              <>
                <HeaderLink
                  path="/login"
                  className="border-border md-2:pl-12 md-2:block pl-8 border-l-2 pr-7 hidden"
                >
                  Login
                </HeaderLink>
                <Button
                  className="whitespace-nowrap hidden md-2:block"
                  to="/signup"
                >
                  Sign Up
                </Button>
                <Button
                  className="whitespace-nowrap md-2:hidden text-sm"
                  to="/signup"
                >
                  Get Started
                </Button>
              </>
            ) : (
              <Button
                className="whitespace-nowrap text-sm md-2:text-base"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            )}
          </div>
        </div>
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}
