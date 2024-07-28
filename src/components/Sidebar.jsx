import Logo from "./common/Logo";
import { UisMultiply } from "@iconscout/react-unicons-solid";
import { UisAngleLeft } from "@iconscout/react-unicons-solid";
import { getTailwindColor } from "../utils/getTailwindColor";
import HeaderLink from "./common/HeaderLink";

export default function Sidebar({ open, toggleSidebar }) {
  return (
    open && (
      <div className="md-2:hidden top-0 left-0 bg-primary w-64 h-full z-50 fixed">
        <div className="flex items-center h-20 px-5">
          <button onClick={toggleSidebar} className="hover:bg-gray-800">
            <UisMultiply size="40" color={getTailwindColor("secondary")} />
          </button>
          <Logo width="100px" />
        </div>
        <div className="flex flex-col items-center space-y-10 mt-10">
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
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-800 absolute bottom-10 right-5 rounded-full"
          >
            <UisAngleLeft size="40" color={getTailwindColor("secondary")} />
          </button>
        </div>
      </div>
    )
  );
}
