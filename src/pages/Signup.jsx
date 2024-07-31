import { Link } from "react-router-dom";
import { Footer, Logo } from "../components";

export default function Signup() {
  return (
    <div className="h-screen w-screen md-2:px-10 px-5 py-5">
      <div className="">
        <Link to="/">
          <Logo width="200px" className="" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
