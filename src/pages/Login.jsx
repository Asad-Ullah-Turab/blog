import { Link, useNavigate } from "react-router-dom";
import { AuthBtn, Footer, Input, Logo } from "../components";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import authService from "../services/authService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (data) => {
    setError(null);
    const session = await authService.login(data);
    if (session) {
      const user = await authService.getCurrentUser();
      if (user) {
        dispatch(login(user));
        navigate("/blogs");
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="md-2:px-10 px-5 py-5">
        <Link to="/">
          <Logo width="200px" className="" />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="my-14 md-2:mx-14 mx-8 text-center max-w-5xl flex-1">
          <p className="text-5xl font-semibold mb-3">Log In</p>
          <p>
            Don&apos;t have an account?
            <Link to={"/signup"} className="text-blue-700">
              {" "}
              Sign Up
            </Link>
          </p>
          <div className="my-14 md-2:flex">
            <form className="flex-1" onSubmit={handleSubmit(submit)}>
              <div className="space-y-7">
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
                <Input
                  placeholder="Password"
                  type="password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: 8,
                    maxLength: 256,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="text-red-500">This field is required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be at least 8 characters long
                  </span>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                  <span className="text-red-500">
                    Password must be less than 256 characters long
                  </span>
                )}
                {error && <p className="mt-5 text-red-500">{error}</p>}
              </div>
              <button
                type="submit"
                className=" mt-11 bg-primary border-blue-700 border-2 w-24 rounded-full p-2 hover:bg-blue-700 active:bg-blue-800 active:border-blue-800"
              >
                Login
              </button>
            </form>
            <div className="flex md-2:flex-col md-2:items-baseline items-center flex-row justify-center md-2:mx-9 my-9 md-2:my-0">
              <div className="md-2:w-2 md-2:border-r md-2:border-b-0 border-b border-solid flex-1"></div>
              <div className="md-2:mx-0 mx-4 md-2:my-2">or</div>
              <div className="md-2:w-2 md-2:border-r md-2:border-b-0 border-b border-solid flex-1"></div>
            </div>
            <div className="flex-1 flex flex-col space-y-3 justify-center">
              <AuthBtn icon={FaGoogle}>Continue with Google</AuthBtn>
              <AuthBtn icon={FaFacebookF}>Continue with Facebook</AuthBtn>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
