import { forwardRef, useId } from "react";

function Input({ type, placeholder, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        {...props}
        placeholder={placeholder}
        className={`bg-primary border-b p-4 w-full focus:outline-none ${className}`}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(Input);
