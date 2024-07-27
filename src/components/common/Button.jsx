import PropTypes from "prop-types";

export default function Button({ children, className = "", ...props }) {
  return (
    <div>
      <button className={`${className} bg-blue-500`} {...props}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
