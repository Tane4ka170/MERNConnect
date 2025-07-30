import React from "react";

const AddModal = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <div className="relative">
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            }
            alt="User"
            className="w-15 h-15 rounded-full"
          />
        </div>
        <div className="text-2xl">Qadim Virk</div>
      </div>

      <div>
        <textarea
          cols={50}
          rows={10}
          placeholder="What's on your mind?"
          className="my-3 outline-0 text-xl p-2"
        ></textarea>
      </div>
      <div>
        <img src="" alt="" className="w-10 h-10 rounded-xl " />
      </div>
    </div>
  );
};

export default AddModal;
