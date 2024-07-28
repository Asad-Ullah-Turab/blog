import { NavLink } from "react-router-dom";

export default function HeaderLink({
  children,
  className = "",
  path,
  ...props
}) {
  return (
    <div className={`text-center hover:text-secondary`}>
      <NavLink
        className={({ isActive }) =>
          `text-header-link font-bold text-lg hover:text-inherit transition-colors delay-75 ${
            isActive ? "text-secondary" : ""
          } ${className}`
        }
        {...props}
        to={path}
      >
        {children}
      </NavLink>
    </div>
  );
}
