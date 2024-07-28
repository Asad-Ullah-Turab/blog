import { useState } from "react";
import Button from "./common/Button";
import HeaderLink from "./common/HeaderLink";
import Logo from "./common/Logo";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex bg-primary justify-between content-center items-center h-20 md-2:px-10 px-5">
      <div className="flex-1 flex">
        <h1>Burger</h1>
        <Logo width="100px" />
      </div>
      <div className="flex-1 justify-between flex">
        <div className="md-2:flex hidden flex-1 space-x-12 items-center mr-12">
          <HeaderLink path="/">Home</HeaderLink>
          <HeaderLink path="/blogs">Blog</HeaderLink>
          <HeaderLink path="/about">About</HeaderLink>
          <HeaderLink path="/contact">Contact</HeaderLink>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <HeaderLink
            path="/login"
            className="border-border md-2:pl-12 pl-8 border-l-2 pr-7"
          >
            Login
          </HeaderLink>
          <Button className="whitespace-nowrap">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
