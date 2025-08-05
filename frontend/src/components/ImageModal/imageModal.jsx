import React from "react";

const ImageModal = ({ isCircular }) => {
  return (
    <div className="p-5 relative flex items-center flex-col h-full">
      {/* {isCircular ? "Round Image" : "Full-Width Image"} */}
      {isCircular ? (
        <img
          src={
            "https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_1280.png"
          }
          alt=""
          className="w-[150px] h-[150px] rounded-full"
        />
      ) : (
        <img
          src={"https://cdn.mos.cms.futurecdn.net/eQjVBwXHWHAyWThasKjHRb.png"}
          alt=""
          className="rounded-xl w-full h-[200px] object-cover"
        />
      )}
      <label
        htmlFor="btn-submit"
        className="absolute bottom-10 left-0 p-3 bg-blue-200 rounded-2xl cursor-pointer"
      >
        Add File
      </label>
      <input type="file" id="btn-submit" className="hidden" />

      <div className="absolute bottom-10 right-0 p-3 bg-blue-200 rounded-2xl cursor-pointer">
        Send
      </div>
    </div>
  );
};

export default ImageModal;
