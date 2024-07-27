import PropTypes from "prop-types";

export default function Button({ children, className = "", ...props }) {
  return (
    <div className="inline-block">
      <button
        className={`rounded-3xl ${className} bg-border text-white font-bold px-6 py-3 ${className}`}
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
