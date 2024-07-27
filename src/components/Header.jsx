import Button from "./common/Button";
import Logo from "./common/Logo";

export default function Header() {
  return (
    <div className="flex bg-gray-500">
      <div className="h-20">
        <Logo />
      </div>
      <div>
        <span>Home</span>
        <span>Blogs</span>
        <span>About Us</span>
        <span>Contact</span>
      </div>
      <div>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
