import PropTypes from "prop-types";

export default function Button({ children, className = "", ...props }) {
  return (
    <div className="inline-block">
      <button
        className={`rounded-full hover:bg-blue-800 active:bg-border bg-border text-white font-medium px-6 py-3 ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
