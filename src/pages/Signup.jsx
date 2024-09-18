import { Link, useNavigate } from "react-router-dom";
import { AuthBtn, Footer, Input, Logo } from "../components";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import authService from "../services/authService";
import { useState } from "react";
import { login } from "../features/authSlice";
import { useDispatch } from "react-redux";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const submit = async (data) => {
    const { username, email, password } = data;
    try {
      const profileData = await authService.register({
        email: email,
        password: password,
        name: username,
      });

      if (profileData) {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(login({
            userData: user,
            profileData,
          }));
          navigate("/blogs");
        } else {
          setError("Error in creating user");
        }
      } else {
        setError("Error in creating user");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex flex-col justify-between text-white">
      <div className="md-2:px-10 px-5 py-5">
        <Link to="/">
          <Logo width="200px" className="" />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="my-14 md-2:mx-14 mx-8 text-center max-w-5xl flex-1">
          <p className="text-5xl font-semibold mb-3">Sign Up</p>
          <p>
            Already have an account?
            <Link to={"/login"} className="text-blue-700">
              {" "}
              Log In
            </Link>
          </p>
          <div className="my-14 md-2:flex">
            <form className="flex-1" onSubmit={handleSubmit(submit)}>
              <div className="space-y-7">
                <Input
                  type="text"
                  placeholder="Username"
                  {...register("username", {
                    required: "This field is required",
                  })}
                />
                {errors.username && (
                  <span className="text-red-500">
                    {errors.username.message}
                  </span>
                )}
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
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
                <Input
                  type="password"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "This field is required",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              {error && <p className="mt-5 text-red-500">{error}</p>}
              <button
                type="submit"
                className="mt-11 bg-primary border-blue-700 border-2 w-24 rounded-full p-2 hover:bg-blue-700 active:bg-blue-800 active:border-blue-800"
              >
                Sign Up
              </button>
            </form>
            <div className="flex md-2:flex-col md-2:items-baseline items-center flex-row justify-center md-2:mx-9 my-9 md-2:my-0">
              <div className="md-2:w-2 md-2:border-r md-2:border-b-0 border-b border-solid flex-1"></div>
              <div className="md-2:mx-0 mx-4 md-2:my-2">or</div>
              <div className="md-2:w-2 md-2:border-r md-2:border-b-0 border-b flex-1"></div>
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
