export default function Logo({ className = "", width = "100" }) {
  return (
    <div
      className={`font-montserrat text-3xl text-secondary md-2:mx-0 mx-5 font-medium ${className}`}
    >
      Zephyr
    </div>
  );
}
