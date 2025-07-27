import React from "react";
import Card from "../Card/card";

const ProfileCard = () => {
  return (
    <Card padding={1}>
      <div className="relative h-25">
        <div className="relative h-22 w-full rounded-md">
          <img
            src={
              "https://www.lifesizecutouts.com.au/cdn/shop/products/new-york-skyline-2000x4500-ref.jpg?v=1654326564"
            }
            alt=""
          />
        </div>

        <div className="absolute top-14 left-6 z-10">
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            }
            alt="User"
            className="rounded-4xl border-2 h-16 w-16 border-white cursor-pointer"
          />
        </div>
      </div>

      <div className="p-5">
        <div className="text-xl">Qadim Virk</div>
        <div className="text-sm my-1">Full-Stack Developer </div>
        <div className="text-sm my-1">Hinjawadi, India</div>
        <div className="text-sm my-1">Issac and Sons</div>
      </div>
    </Card>
  );
};

export default ProfileCard;
