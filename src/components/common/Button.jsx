import PropTypes from "prop-types";

export default function Button({ children, className = "", ...props }) {
  return (
    <div className="inline-block">
      <button
        className={`p-5 rounded-xl mx-5 ${className} bg-blue-500`}
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
