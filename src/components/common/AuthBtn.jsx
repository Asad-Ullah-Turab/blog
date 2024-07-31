export default function AuthBtn({ children, className, icon: Icon, ...props }) {
  return (
    <div className="flex">
      <div>
        <div className="bg-primary border-2 border-r-0 border-blue-700 p-3 shadow-none">
          {<Icon size={30} />}
        </div>
      </div>
      <button
        className={`bg-blue-700 border-none flex-1 text-white py-4 shadow-none ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
