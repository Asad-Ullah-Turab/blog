export default function Logo({ className = "", width = "100" }) {
  return (
    <div
      className={`font-monserrat text-3xl text-secondary font-medium ${className}`}
    >
      Zephyr
    </div>
  );
}
