import { useEffect, useState } from "react";
import Advertisement from "../../components/Advertisement/advertisement";

const Resume = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    let userData = localStorage.getItem("userInfo");
    setUserData(userData ? JSON.parse(userData) : null);
  }, []);
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      <div className="w-[100%] py-5 sm:w-[74%]">
        <img
          src={userData?.resume}
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
