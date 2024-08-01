import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ children, className = "", to, ...props }) {
  return (
    <div className="inline-block">
      <Link to={to}>
        <button
          className={`rounded-full hover:bg-blue-800 active:bg-border bg-border text-white font-medium px-6 py-3 ${className}`}
          {...props}
        >
          {children}
        </button>
      </Link>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
