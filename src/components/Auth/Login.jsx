import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../app/Slices/authSlice.js";
import { Logo, Input, Button } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons.jsx";
import { toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, status } = useSelector(({ auth }) => auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status) navigate("/");
  }, []);

  const handleLogin = (data) => {
    const isEmail = !data.username.startsWith("@");

    if (isEmail) {
      let isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.username);
      if (!isValidEmail) {
        toast.error("Please enter valid email id");
        return;
      }
    }

    const loginData = isEmail
      ? { email: data.username, password: data.password }
      : { username: data.username.substr(1), password: data.password };

    dispatch(login(loginData));
  };

  return (
    <div className="h-screen w-full overflow-y-auto bg-[#121212] text-white">
      <div className="mx-auto my-28 flex w-full max-w-sm flex-col px-4">
        <div className="mx-auto inline-block w-16">
          <Logo />
        </div>
        <div className="mb-2 mt-2 w-full text-center text-2xl font-semibold uppercase">
          Login to your Account
        </div>
        {/* <h6 className="mx-auto text-2xl my-3">Login to your Account</h6> */}
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="mx-auto mt-4 flex w-full max-w-sm flex-col px-4"
        >
          <Input
            label="Username or Email address"
            required
            placeholder="use @ for username"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <span className="text-red-500 mt-1">*username or email is required</span>
          )}
          <Input
            label="Password"
            labelClassName="mt-5"
            type="password"
            required
            placeholder="Enter the Password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500 mt-1">*password is required</span>
          )}
          <Button type="submit" disabled={loading} className="mt-5 disabled:cursor-not-allowed">
            {loading ? <span>{icons.loading}</span> : "Sign in"}
          </Button>
        </form>
        <h6 className="mx-auto text-md mt-4">
          Don't have an Account yet?{" "}
          <Link to={"/signup"} className="font-semibold text-blue-600 hover:text-blue-400">
            Sign up now
          </Link>
        </h6>
      </div>
    </div>
  );
}

export default Login;
