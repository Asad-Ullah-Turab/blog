export default function Logo({ className = "", width = "100" }) {
  return (
    <div
      className={`font-montserrat md-2:text-3xl text-xl text-secondary font-medium ${className}`}
    >
      Zephyr
    </div>
  );
}
