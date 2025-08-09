import React from "react";
import ProfileCard from "../../components/ProfileCard/profileCard";
import Advertisement from "../../components/Advertisement/advertisement";
import Card from "../../components/Card/card";

const Notification = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      {/* Left */}
      <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
        <div className="h-fit">
          <ProfileCard />
        </div>
      </div>

      {/* Middle */}
      <div className="w-[100%] py-5 sm:w-[50%]">
        <div>
          <Card padding={0}>
            <div className="w-full">
              {/* For each notification */}
              <div
                className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-700 p-3`}
              >
                <img
                  src={
                    "https://cdn.pixabay.com/photo/2017/03/21/13/27/evil-2162179_1280.png"
                  }
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div>Dummy User has invited you to connect</div>
              </div>
              <div
                className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-700 p-3`}
              >
                <img
                  src={
                    "https://cdn.pixabay.com/photo/2017/03/21/13/27/evil-2162179_1280.png"
                  }
                  alt=""
                  className="rounded-4xl cursor-pointer w-15 h-15"
                />
                <div>Dummy User left a comment on your post</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Right */}
      <div className="w-[26%] py-5 hidden md:block">
        <div className="my-5 sticky top-19">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default Notification;
