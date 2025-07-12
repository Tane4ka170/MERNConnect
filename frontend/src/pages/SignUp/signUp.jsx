import React from "react";

const SignUp = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-4xl mb-5e">
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
