import Button from "./common/Button";
import HeaderLink from "./common/HeaderLink";
import Logo from "./common/Logo";

export default function Header() {
  return (
    <div className="flex bg-primary justify-between content-center items-center h-20">
      <Logo />
      <div className="lg:flex justify-between hidden">
        <HeaderLink path="/">Home</HeaderLink>
        <HeaderLink path="/blogs">Blog</HeaderLink>
        <HeaderLink path="/about">About</HeaderLink>
        <HeaderLink path="/contact">Contact</HeaderLink>
      </div>
      <div>
        <span className="mx-3">Login</span>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
