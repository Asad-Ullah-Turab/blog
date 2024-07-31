import { Link } from "react-router-dom";
import { Footer, Logo } from "../components";

export default function Signup() {
  return (
    <div className="">
      <div className="md-2:px-10 px-5 py-5">
        <Link to="/">
          <Logo width="200px" className="" />
        </Link>
      </div>
      <div className="m-14 text-center">
        <p className="text-5xl font-semibold mb-3">Sign Up</p>
        <p>
          Already have an account?
          <Link className="text-blue-700"> Log In</Link>{" "}
        </p>
        <div className="my-14 flex bg-slate-300">
          <div className="flex-1 flex flex-col space-y-7">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Sign Up</button>
          </div>
          <div className="flex flex-col justify-center mx-9">
            <div className="w-2 border-r border-slate-800 border-solid flex-1"></div>
            <div>or</div>
            <div className="w-2 border-r border-slate-800 border-solid flex-1"></div>
          </div>
          <div className="flex-1 flex flex-col space-y-3 justify-center">
            <button>Halo</button>
            <button>Hola</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
