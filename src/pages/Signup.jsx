import { Link } from "react-router-dom";
import { AuthBtn, Footer, Logo } from "../components";

export default function Signup() {
  return (
    <div className="">
      <div className="md-2:px-10 px-5 py-5">
        <Link to="/">
          <Logo width="200px" className="" />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="m-14 text-center max-w-5xl flex-1">
          <p className="text-5xl font-semibold mb-3">Sign Up</p>
          <p>
            Already have an account?
            <Link className="text-blue-700"> Log In</Link>{" "}
          </p>
          <div className="my-14 md-2:flex">
            <div className="flex-1 flex flex-col space-y-7">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <button>Sign Up</button>
            </div>
            <div className="flex md-2:flex-col md-2:items-baseline items-center flex-row justify-center md-2:mx-9 my-9 md-2:my-0">
              <div className="md-2:w-2 md-2:border-r md-2:border-b-0 border-b border-slate-800 border-solid flex-1"></div>
              <div className="md-2:mx-0 mx-4 md-2:my-2">or</div>
              <div className="md-2:w-2 md-2:border-r md-2:border-b-0 border-b border-slate-800 border-solid flex-1"></div>
            </div>
            <div className="flex-1 flex flex-col space-y-3 justify-center">
              <AuthBtn>halo</AuthBtn>
              <AuthBtn>halo</AuthBtn>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
