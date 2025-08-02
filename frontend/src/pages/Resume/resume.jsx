import React from "react";
import Advertisement from "../../components/Advertisement/advertisement";

const Resume = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      <div className="w-[100%] py-5 sm:w-[74%]">
        <img
          src={
            "https://cdn.prod.website-files.com/652e8c998f656fbf00cb7c99/6786047f2a94d7b6e209215b_HeSzFu3oRM-photo.webp"
          }
          alt="14 College Resume Examples and Guide for 2025"
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="w-[26%] py-5 hidden md:block">
        <div className="sticky top-19">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default Resume;
