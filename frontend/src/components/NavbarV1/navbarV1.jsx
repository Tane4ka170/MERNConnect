import React from "react";

const NavbarV1 = () => {
  return (
    <nav className="w-[100%] bg-gray-500 md:px-[100px] px-[20px] flex justify-between py-4 box-border">
      <div className="flex justify-between">
        <div className="flex gap-0 items-center cursor-pointer">
          <h3 className="text-blue-900 font-bold text-3xl">NetWorkin</h3>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/942/942749.png"}
            alt="logo"
            className="w-5 h-5"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarV1;
