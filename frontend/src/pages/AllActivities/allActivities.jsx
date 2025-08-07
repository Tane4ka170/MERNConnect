import React from "react";

const AllActivities = () => {
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      {/* Left */}
      <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
        <div className="h-fit">
          <ProfileCard />
        </div>

        {/* Middle */}
        <div className="w-[100%] py-5 sm:w-[50%]"></div>

        {/* Right */}
        <div className="w-[26%] py-5 hidden md:block">
          <div className="my-5 sticky top-19">
            <Advertisement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllActivities;
