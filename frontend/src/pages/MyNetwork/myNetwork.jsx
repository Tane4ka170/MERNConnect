import { useState } from "react";
import ProfileCard from "../../components/ProfileCard/profileCard";

const MyNetwork = () => {
  const [text, setText] = useState("Reconnect with your friends");

  const handleFriends = async () => {
    setText("Reconnect with your friends");
  };

  const handlePending = async () => {
    setText("Awaiting Approval");
  };
  return (
    <div className="px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-50 ">
      <div className="py-4 px-10 border-1 border-gray-950 w-full flex justify-between my-5 bg-white text-xl rounded-xl">
        <div>{text}</div>
        <div className="flex gap-3">
          <button
            onClick={handleFriends}
            className={`p-1 cursor-pointer border-1 rounded-lg border-gray-800 ${
              text === "Reconnect with your friends"
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            Friends
          </button>
          <button
            onClick={handlePending}
            className={`p-1 cursor-pointer border-1 rounded-lg border-gray-800 ${
              text === "Awaiting Approval" ? "bg-blue-600 text-white" : ""
            }`}
          >
            Awaiting Approval
          </button>
        </div>
      </div>

      <div className="flex h-[80vh] w-full gap-7 flex-wrap items-start justify-center">
        <div className="md:w-[23%] h-[270px] sm:w-full">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default MyNetwork;
