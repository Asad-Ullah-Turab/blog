import Logo from "./common/Logo";
import { RiCloseLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { getTailwindColor } from "../utils/getTailwindColor";
import HeaderLink from "./common/HeaderLink";
import { useEffect, useRef } from "react";

export default function Sidebar({ open, toggleSidebar }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        open
      ) {
        toggleSidebar();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, toggleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`md-2:hidden top-0 left-0 bg-primary w-64 h-full z-50 fixed overflow-y-auto flex flex-col justify-between transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="pb-20">
        <div className="flex items-center h-20 px-5">
          <button onClick={toggleSidebar} className="hover:bg-gray-800">
            <RiCloseLine size="30" color={getTailwindColor("secondary")} />
          </button>
          <Logo width="100px" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="items-center space-y-10 mt-10 flex-1">
            <HeaderLink path="/" onClick={toggleSidebar}>
              Home
            </HeaderLink>
            <HeaderLink onClick={toggleSidebar} path="/blogs">
              Blog
            </HeaderLink>
            <HeaderLink onClick={toggleSidebar} path="/about">
              About
            </HeaderLink>
            <HeaderLink onClick={toggleSidebar} path="/contact">
              Contact
            </HeaderLink>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={toggleSidebar}
          className="hover:bg-gray-800 rounded-full absolute right-5 bottom-5"
        >
          <FaAngleLeft size="24" color={getTailwindColor("secondary")} />
        </button>
      </div>
    </div>
  );
}
