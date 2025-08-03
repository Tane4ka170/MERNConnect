import React from "react";
import Advertisement from "../../components/Advertisement/advertisement";
import Card from "../../components/Card/card";

const Profile = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-50 ">
      <div className="flex justify-between">
        {/* Left side main section */}
        <div className="w-full md:w-[70%]">
          <div>
            <Card padding={0}>
              <div className="w-full h-fit">
                <div className="relative w-full h-[200px]">
                  <img
                    src={
                      "https://sb.kaleidousercontent.com/67418/1920x1100/ffa7b88ebb/transparent.png"
                    }
                    alt=""
                    className="w-full h-[200px] rounded-tr-lg rounded-tl-lg"
                  />
                  <div className="absolute object-cover top-24 left-6 z-10">
                    <img
                      src={
                        "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                      }
                      alt="User"
                      className="rounded-full border-white border-2 cursor-pointer w-35 h-35"
                    />
                  </div>
                </div>

                <div className="mt-10 relative px-8 py-2">
                  <div className="w-full">
                    <div className="text-2xl">Qadim Virk</div>
                    <div className="text-gray-950">
                      I am a Full-Stack Developer{" "}
                    </div>
                    <div className="text-sm text-gray-400">
                      Hinjawadi, India
                    </div>
                    <div className="text-md text-blue-600 w-fit cursor-pointer">
                      81 connections
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="hidden md:flex md:w-[28%]">
          <div className="sticky top-19">
            <Advertisement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
