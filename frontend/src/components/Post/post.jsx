import React from "react";
import Card from "../Card/card";

const Post = () => {
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

      <div className="text-md p-4"></div>
    </Card>
  );
};

export default Post;
