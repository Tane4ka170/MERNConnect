import React from "react";
import Card from "../../components/Card/card";
import ProfileCard from "../../components/ProfileCard/profileCard";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ArticleIcon from "@mui/icons-material/Article";
import Advertisement from "../../components/Advertisement/advertisement";
import Post from "../../components/Post/post";

const Feeds = () => {
  const [addPostModel, setPostModal]= useState(false)
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      {/* Left */}
      <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
        <div className="h-fit">
          <ProfileCard />
        </div>

        <div className="w-full my-5">
          <Card padding={1}>
            <div className="w-full flex justify-between">
              <div>Profile Visits</div>
              <div className="text-blue-800">37</div>
            </div>
            <div className="w-full flex justify-between">
              <div>Post Views</div>
              <div className="text-blue-800">14</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Middle */}
      <div className="w-[100%] py-5 sm:w-[50%]">
        {/* Post section */}
        <div>
          <Card padding={1}>
            <div className="flex gap-2 items-center">
              <img
                src={
                  "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                }
                alt=""
                className="rounded-4xl w-13 h-13 border-2 border-white cursor-pointer"
              />
              <div className="w-full border-1 py-3 px-3 rounded-3xl hover:bg-gray-300">
                Create a post
              </div>
            </div>

            <div className="w-full flex mt-3">
              <div className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-900 hover:text-white">
                <VideoCallIcon sx={{ color: "green" }} />
                Video
              </div>
              <div className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-900 hover:text-white">
                <AddPhotoAlternateIcon sx={{ color: "blue" }} />
                Image
              </div>
              <div className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-900 hover:text-white">
                <ArticleIcon sx={{ color: "orange" }} />
                Article
              </div>
            </div>
          </Card>
        </div>

        <div className="border-b-1 border-gray-100 w-[100%] my-5" />

        <div className="w-full flex flex-col gap-5">
          <Post />
        </div>
      </div>

      {/* Right */}
      <div className="w-[26%] py-5 hidden md:block">
        <div>
          <Card padding={1}>
            <div className="text-xl">NetWorkin News</div>
            <div className="text-gray-500">Trending news</div>
            <div className="my-1">
              <div className="text-md">
                How AI is Changing the Future of Work{" "}
              </div>
              <div className="text-xs text-gray-800">2h ago</div>
            </div>
            <div className="my-1">
              <div className="text-md">
                Emerging Trends in Remote Collaboration
              </div>
              <div className="text-xs text-gray-800">5h ago</div>
            </div>
          </Card>
        </div>

        <div className="my-5 sticky top-19">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default Feeds;
