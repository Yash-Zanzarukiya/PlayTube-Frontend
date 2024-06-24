import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Logo } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register as createAccount } from "../../app/Slices/userSlice";
import { icons } from "../../assets/icons";
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authStatus = useSelector(({ auth }) => auth.status);
  const { loading, userData } = useSelector(({ user }) => user);

  if (authStatus) navigate("/");
  if (!authStatus && userData) navigate("/login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    dispatch(createAccount(data));
  };

  return (
    <div className="h-screen w-full overflow-y-auto bg-[#121212] text-white">
      <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
        <div className="mx-auto inline-block w-16">
          <Logo />
        </div>
        <div className="mb-2 w-full text-center text-2xl font-semibold uppercase">
          Create an Account
        </div>
        <h6 className="mx-auto text-md mb-1">
          Already have an Account?{" "}
          <Link to={"/login"} className="font-semibold text-blue-600 hover:text-blue-400">
            Sign in now
          </Link>
        </h6>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="mx-auto mt-2 flex w-full max-w-sm flex-col px-4"
        >
          <Input
            label="Username"
            required
            placeholder="Choose your Username"
            {...register("username", { required: "please enter username" })}
          />
          {errors.username?.type === "required" && (
            <span className="text-red-500 mt-1">*username is required</span>
          )}
          <Input
            label="Email"
            type="email"
            required
            labelClassName="mt-4"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 mt-1">*email is required</span>
          )}
          {errors.email?.type === "matchPattern" && (
            <span className="text-red-500 mt-1">*please enter valid email address</span>
          )}
          <Input
            label="Password"
            type="password"
            required
            labelClassName="mt-4"
            placeholder="Create your password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500 mt-1">*password is required</span>
          )}
          <Input
            label="Full Name"
            required
            labelClassName="mt-4"
            placeholder="Enter your full name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName?.type === "required" && (
            <span className="text-red-500 mt-1">*full name is required</span>
          )}
          <Input
            label="Avatar"
            type="file"
            required
            labelClassName="mt-4"
            placeholder="Upload your avatar"
            {...register("avatar", {
              required: true,
              validate: (file) => {
                const allowedExtensions = ["image/jpeg", "image/png", "image/jpg"];
                const fileType = file[0]?.type;
                return allowedExtensions.includes(fileType)
                  ? true
                  : "Invalid file type! Only .png .jpg and .jpeg files are accepted";
              },
            })}
          />
          {errors.avatar?.type === "required" && (
            <span className="text-red-500 mt-1">*avatar is required</span>
          )}
          {errors.avatar?.type === "validate" && (
            <span className="text-red-500 mt-1">Only .png & .jpg & .jpeg files are accepted</span>
          )}
          <Input
            label="Cover Image"
            type="file"
            labelClassName="mt-4"
            placeholder="Upload your Cover Image"
            {...register("coverImage", {
              required: false,
              validate: (file) => {
                if (!file[0]) return true;
                const allowedExtensions = ["image/jpeg", "image/png", "image/jpg"];
                const fileType = file[0]?.type;
                return allowedExtensions.includes(fileType)
                  ? true
                  : "Invalid file type! Only .png .jpg and .jpeg files are accepted";
              },
            })}
          />
          {errors.coverImage?.type === "required" && (
            <span className="text-red-500 mt-1">*coverImage is required</span>
          )}
          {errors.coverImage?.type === "validate" && (
            <span className="text-red-500 mt-1">Only .png & .jpg & .jpeg files are accepted</span>
          )}
          <Button type="submit" disabled={loading} className="mt-5 disabled:cursor-not-allowed">
            {loading ? <span>{icons.loading}</span> : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
