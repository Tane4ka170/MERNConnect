import axios from "axios";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ImageModal = ({ isCircular, selfData }) => {
  const [imgLink, setImgLink] = useState(
    isCircular ? selfData?.profile_pic : selfData?.cover_pic
  );
  const [loading, setLoading] = useState(false);

  const handleInputImage = async (e) => {
    const files = e.target.files[0];
    const data = new FormData();
    data.append("file", files);

    data.append("upload_preset", "NetWorkin");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/doo1ifq0i/image/upload",
        data
      );
      const imageUrl = response.data.secure_url;
      setImgLink(imageUrl);
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-5 relative flex items-center flex-col h-full">
      {isCircular ? (
        <img
          src={imgLink}
          alt=""
          className="w-[150px] h-[150px] rounded-full"
        />
      ) : (
        <img
          src={imgLink}
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
      <input
        type="file"
        id="btn-submit"
        className="hidden"
        onChange={handleInputImage}
      />

      <div className="absolute bottom-10 right-0 p-3 bg-blue-200 rounded-2xl cursor-pointer">
        Send
      </div>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default ImageModal;
