import Logo from "./common/Logo";
import { RiCloseLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { getTailwindColor } from "../utils/getTailwindColor";
import HeaderLink from "./common/HeaderLink";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

  const sidebarLinks = [
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
          <Link to="/" onClick={toggleSidebar}>
            <Logo width="100px" className="mx-4" />
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <div className="items-center space-y-10 mt-10 flex-1">
            {sidebarLinks.map((link) => (
              <HeaderLink
                key={link.name}
                onClick={toggleSidebar}
                path={link.path}
              >
                {link.name}
              </HeaderLink>
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={toggleSidebar}
          className="hover:bg-gray-800 rounded-full absolute right-5 bottom-5 p-2"
        >
          <FaAngleLeft size="24" color={getTailwindColor("secondary")} />
        </button>
      </div>
    </div>
  );
}
