import { Link } from "react-router-dom";

export default function HeaderLink({ children, className = "", path }) {
  return (
    <div className={`w-28 text-center mx-5 inline ${className}`}>
      <Link to={path}>{children}</Link>
    </div>
  );
}
