import { useEffect, useState } from "react";

const Conversation = (item, key, ownData) => {
  const [memberData, setMemberData] = useState(null);

  useEffect(() => {
    let ownId = ownData?._id;
    let arr = item?.members?.filter((it) => it._id !== ownId);
    setMemberData(arr[0]);
  }, []);

  return (
    <div
      className="flex items-center w-full cursor-pointer border-b-1 border-gray-400 gap-3 p-4 hover:bg-gray-600 hover:text-white"
      key={key}
    >
      <div className="shrink-0">
        <img
          src={memberData?.profile_pic}
          alt="User icon-cp"
          className="w-12 h-12 rounded-[100%] cursor-pointer"
        />
      </div>
      <div>
        <div className="text-md">{memberData?.f_name}</div>
        <div className="text-sm text-gray-500">{memberData?.headline}</div>
      </div>
    </div>
  );
};

export default Conversation;
