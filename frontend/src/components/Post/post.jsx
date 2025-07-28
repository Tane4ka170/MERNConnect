import { useState } from "react";
import Card from "../Card/card";

const Post = () => {
  const [seeMore, setSeeMore] = useState(false);

  const desc = `Over the last few months, our team at Issac and Sons has been working hard to modernize our internal development workflows. We recently rolled out a fully containerized CI/CD pipeline using GitHub Actions and Docker, and the impact on our deployment time has been incredible — 60% faster on average. We’re now focusing on performance monitoring and integrating more automated testing across all services. Huge thanks to the dev and infra teams for pushing these initiatives forward. This is how real change happens — one step at a time. #Engineering #Leadership #DevOps #ContinuousDelivery`;
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

      <div className="my-2 p-4 flex justify-between items-center"></div>
    </Card>
  );
};

export default Post;
