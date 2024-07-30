import { useState } from "react";
import Button from "./common/Button";
import HeaderLink from "./common/HeaderLink";
import Logo from "./common/Logo";
import { FaBars } from "react-icons/fa6";
import { getTailwindColor } from "../utils/getTailwindColor";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="flex bg-primary justify-between content-center items-center h-20 md-2:px-10 px-5">
        <div className="flex-1 flex items-center">
          <button className="md-2:hidden" onClick={toggleSidebar}>
            <FaBars size="24" color={getTailwindColor("secondary")} />
          </button>
          <Link to="/">
            <Logo width="100px" />
          </Link>
        </div>
        <div className="flex">
          <div className="md-2:flex hidden flex-1 space-x-12 items-center mr-12">
            <HeaderLink path="/">Home</HeaderLink>
            <HeaderLink path="/blogs">Blog</HeaderLink>
            <HeaderLink path="/about">About</HeaderLink>
            <HeaderLink path="/contact">Contact</HeaderLink>
          </div>
          <div className="flex flex-1 items-center">
            <HeaderLink
              path="/login"
              className="border-border md-2:pl-12 md-2:block pl-8 border-l-2 pr-7 hidden"
            >
              Login
            </HeaderLink>
            <Button className="whitespace-nowrap hidden md-2:block">
              Sign Up
            </Button>
            <Button className="whitespace-nowrap md-2:hidden">
              Get Started
            </Button>
          </div>
        </div>
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}
