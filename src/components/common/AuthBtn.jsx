export default function AuthBtn({ children, className, ...props }) {
  return (
    <button className={`bg-blue-800 text-white py-4 ${className}`} {...props}>
      {children}
    </button>
  );
}
