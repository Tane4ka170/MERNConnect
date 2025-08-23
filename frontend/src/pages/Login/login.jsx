import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = (props) => {
  const [loginField, setLoginField] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onChangeInput = (event, key) => {
    setLoginField({ ...loginField, [key]: event.target.value });
  };

  const handleLogin = async () => {
    if (
      loginField.email.trim().length === 0 ||
      loginField.password.trim().length === 0
    ) {
      return toast.error("Kindly complete all required fields");
    }
    await axios
      .post("http://localhost:1478/api/auth/login", loginField, {
        withCredentials: true,
      })
      .then((res) => {
        props.changeLoginValue(true);
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));
        navigate("/feeds");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.error);
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10">
        <div className="text-3xl">Sign In</div>
        <div className="my-5">
          <GoogleLoginComp />
        </div>

        <div className="flex items-center gap-2">
          <div className="border-b-2 border-gray-500 w-[45%]" />
          <div>or</div>
          <div className="border-b-2 border-gray-500 w-[45%] my-6" />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Enter your email"
              value={loginField.email}
              onChange={(event) => onChangeInput(event, "email")}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Enter your password"
              value={loginField.password}
              onChange={(event) => onChangeInput(event, "password")}
            />
          </div>

          <div
            className="w-full hover:bg-blue-900 bg-blue-100 text-white py-3 px-4 rounded-xl text-center cursor-pointer my-2"
            onClick={handleLogin}
          >
            Login
          </div>
        </div>

        <div className="mt-4 mb-10">
          Not on NetWorkin yet?{" "}
          <Link to={"/signUp"} className="text-blue-700 cursor-pointer">
            Create an account
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
