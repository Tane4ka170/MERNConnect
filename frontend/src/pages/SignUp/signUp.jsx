import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-4xl mb-5">
        Unlock your full professional potential
      </div>
      <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm box p-10">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="f_name">Full Name</label>
            <input
              type="text"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Enter your full name"
            />
          </div>

          <div className="w-full hover:bg-blue-900 bg-blue-100 text-white py-3 px-4 rounded-xl text-center cursor-pointer my-2">
            Register
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="border-b-2 border-gray-500 w-[45%]" />
          <div>or</div>
          <div className="border-b-2 border-gray-500 w-[45%] my-6" />
        </div>

        <div>Google button</div>
      </div>

      <div className="mt-4 mb-10">
        Already a member of NetWorkin?{" "}
        <Link to={"/login"} className="text-blue-700 cursor-pointer">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
