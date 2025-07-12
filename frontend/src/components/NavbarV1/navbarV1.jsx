import React from "react";
import { Link } from "react-router-dom";

const NavbarV1 = () => {
  return (
    <nav className="w-[100%] bg-gray-500 md:px-[100px] px-[20px] flex justify-between py-4 box-border">
      <Link to={"/"} className="flex justify-between">
        <div className="flex gap-0 items-center cursor-pointer">
          <h3 className="text-blue-900 font-bold text-3xl">NetWorkin</h3>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/942/942749.png"}
            alt="logo"
            className="w-5 h-5"
          />
        </div>
      </Link>

      <div className="flex box-border md:gap-4 gap-2 items-center justify-center">
        <Link
          to={"/signUp"}
          className="md:px-4 md:py-2 box-border text-white rounded-3xl text-xl hover:bg-gray-700 cursor-pointer"
        >
          Sign Up Today
        </Link>
        <div className="px-4 py-2 box-border border-1 text-blue-400 border-blue-400 rounded-3xl text-xl hover:bg-blue-200 cursor-pointer">
          Log In
        </div>
      </div>
    </nav>
  );
};

export default NavbarV1;
