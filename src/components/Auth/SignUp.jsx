import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Logo } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register as createAccount } from "../../app/Slices/userSlice";
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    dispatch(createAccount(data)).then((res) => {
      navigate("/login");
    });
  };

  return (
    <div className="h-screen w-full overflow-y-auto bg-[#121212] text-white">
      <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
        <div className="mx-auto inline-block w-16">
          <Logo />
        </div>
        <div className="mb-6 w-full text-center text-2xl font-semibold uppercase">Play</div>
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
          <Input
            label="Email"
            type="email"
            required
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            required
            placeholder="Create your password"
            {...register("password", { required: true })}
          />
          <Input
            label="Full Name"
            required
            placeholder="Enter your full name"
            {...register("fullName", { required: true })}
          />
          <Input
            label="Avatar"
            type="file"
            required
            placeholder="Upload your avatar"
            {...register("avatar", { required: true })}
          />
          <Input
            label="Cover Image"
            type="file"
            placeholder="Upload your Cover Image"
            {...register("coverImage", { required: false })}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
