import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../app/Slices/authSlice.js";
import { Logo, Input, Button } from "../index.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "yashpz",
      password: "12345678",
    },
  });

  const handleLogin = (data) => {
    dispatch(login(data)).then((res) => {
      navigate("/");
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
          onSubmit={handleSubmit(handleLogin)}
          className="mx-auto my-8 flex w-full max-w-sm flex-col px-4"
        >
          {/* <Input
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
          /> */}
          <Input
            label="Username"
            required
            placeholder="Enter your Username"
            {...register("username", { required: true })}
          />
          <Input
            label="Password"
            type="password"
            required
            placeholder="Enter the Password"
            {...register("password", { required: true })}
          />
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
