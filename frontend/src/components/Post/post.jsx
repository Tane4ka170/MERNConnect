import { useState } from "react";
import Card from "../Card/card";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";

const Post = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [comment, setComment] = useState(false);

  const desc = `Over the last few months, our team at Issac and Sons has been working hard to modernize our internal development workflows. We recently rolled out a fully containerized CI/CD pipeline using GitHub Actions and Docker, and the impact on our deployment time has been incredible — 60% faster on average. We’re now focusing on performance monitoring and integrating more automated testing across all services. Huge thanks to the dev and infra teams for pushing these initiatives forward. This is how real change happens — one step at a time. #Engineering #Leadership #DevOps #ContinuousDelivery`;

  const handleSendComment = (e) => {
    e.preventDefault();
  };
  return (
    <Card padding={0}>
      <div className="flex gap-3 p-4">
        <div className="w-12 h-12 rounded-4xl">
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            }
            alt="User"
            className="rounded-4xl w-12 h-12 border-2 border-white cursor-pointer"
          />
        </div>

        <div>
          <div className="text-lg font-semibold">Jarwadi Siregar</div>
          <div className="text-xs text-gray-950">Engineering Manager</div>
        </div>
      </div>

      <div className="text-md p-4 my-3 whitespace-pre-line flex-grow">
        {seeMore ? desc : `${desc.slice(0, 100)}...`}{" "}
        <span
          className="cursor-pointer text-gray-700"
          onClick={() => setSeeMore((prev) => !prev)}
        >
          {seeMore ? "Show Less" : "Show More"}
        </span>
      </div>

      <div className="w-[100%] h-[300px]">
        <img
          src={
            "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
          }
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="my-2 p-4 flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <ThumbUpIcon sx={{ color: "blue", fontSize: 20 }} />{" "}
          <div className="text-sm text-gray-900"> 92 Likes</div>
        </div>
        <div className="flex gap-1 items-center">
          <ThumbUpIcon sx={{ color: "blue", fontSize: 20 }} />{" "}
          <div className="text-sm text-gray-900"> 6 Comments</div>
        </div>
      </div>

      <div className="flex p-1">
        <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-400">
          <ThumbUpIcon sx={{ fontSize: 22, color: "blue" }} /> <span>Like</span>{" "}
        </div>
        <div
          className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-400"
          onClick={() => setComment(true)}
        >
          <CommentIcon sx={{ fontSize: 22, color: "blue" }} />{" "}
          <span>Comment</span>{" "}
        </div>
        <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-400">
          <SendIcon sx={{ fontSize: 22, color: "blue" }} /> <span>Share</span>{" "}
        </div>
      </div>

      {/* Comment section */}
      {comment && (
        <div className="p-4 w-full">
          <div className="flex gap-2 items-center">
            <img
              src={
                "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
              }
              alt="User"
              className="rounded-full w-12 h-12 border-2 border-white cursor-pointer"
            />

            <form className="w-full flex gap-2" onSubmit={handleSendComment}>
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-500"
              />
              <button
                type="submit"
                className="cursor-pointer bg-blue-400 text-white rounded-3xl py-1 px-3"
              >
                Send
              </button>
            </form>
          </div>

          {/* Other's comment section */}
          <div className="w-full p-4">
            <div className="my-4">
              <div className="flex gap-3">
                <img
                  src={
                    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  }
                  alt="User"
                  className="rounded-full w-12 h-12 border-2 border-white cursor-pointer"
                />
                <div className="cursor-pointer">
                  <div className="text-md">Jarwadi Siregar</div>
                  <div className="text-sm text-gray-950">
                    Engineering Manager
                  </div>
                </div>
              </div>

              <div className="px-11 my-2">
                This is impressive, Jarwadi! 🚀 Thanks for sharing the results —
                we’ve been thinking about containerizing our pipeline too, and
                this just gave me the push I needed.
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;
