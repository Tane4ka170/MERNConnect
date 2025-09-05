import { useEffect, useState } from "react";
import Card from "../Card/card";

const Advertisement = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    let userData = localStorage.getItem("userInfo");
    setUserData(userData ? JSON.parse(userData) : null);
  }, []);

  return (
    <div className="sticky top-18">
      <Card padding={0}>
        <div className="relative h-25">
          <div className="relative h-22 w-full rounded-md">
            <img
              src={
                "https://www.lifesizecutouts.com.au/cdn/shop/products/new-york-skyline-2000x4500-ref.jpg?v=1654326564"
              }
              alt=""
            />
          </div>

          <div className="absolute top-14 left-[45%] z-10">
            <img
              src={userData?.profile_pic}
              alt="User"
              className="rounded-4xl border-2 h-14 w-14 border-white cursor-pointer"
            />
          </div>
        </div>

        <div className="px-5 my-5 mx-auto">
          <div className="text-sm font-semibold text-center">
            {userData?.f_name}
          </div>
          <div className="text-sm my-3 text-center">
            {" "}
            Stay updated with new job openings and industry trends
          </div>
          <div className="text-sm my-1 border-1 text-center p-2 rounded-2xl font-bold border-blue-500 text-white bg-blue-400 cursor-pointer">
            Discover
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Advertisement;
