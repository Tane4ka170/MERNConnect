import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] bg-gray-950 flex justify-center">
      <div className="md:p-3 w-[100%] flex flex-col items-center py-4">
        <div className="flex gap-0 items-center cursor-pointer">
          <h3 className="text-blue-900 font-bold text-xl">NetWorkin</h3>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/942/942749.png"}
            alt="logo"
            className="w-10 h-10"
          />
        </div>
        <div className="text-sm text-white">@Copyright 2025</div>
      </div>
    </div>
  );
};

export default Footer;
