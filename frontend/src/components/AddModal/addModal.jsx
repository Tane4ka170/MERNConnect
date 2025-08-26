import ImageIcon from "@mui/icons-material/Image";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddModal = (props) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [desc, setDesc] = useState("");

  const handlePost = async () => {
    if ((desc.trim().length === 0) & !imageUrl) {
      return toast.error("Kindly provide at least one field");
    }

    await axios
      .post(
        "http://localhost:1478/api/post/",
        {
          desc: desc,
          imageLink: imageUrl,
        },
        { withCredentials: true }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUploadImage = async (e) => {
    const files = e.target.files[0];
    const data = new FormData();
    data.append("file", files);

    data.append("upload_preset", "NetWorkin");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/doo1ifq0i/image/upload",
        data
      );
      const imageUrl = response.data.secure_url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      toast.error("Failed to upload image");
    }
  };
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <div className="relative">
          <img
            src={props.personalData?.profile_pic}
            alt="User"
            className="w-15 h-15 rounded-full"
          />
        </div>
        <div className="text-2xl">{props.personalData?.f_name}</div>
      </div>

      <div>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          cols={40}
          rows={10}
          placeholder="What's on your mind?"
          className="my-3 outline-0 text-xl p-2"
        ></textarea>
      </div>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="" className="w-10 h-10 rounded-xl " />
        </div>
      )}

      <div className="flex justify-between">
        <div className="my-2">
          <label htmlFor="inputFile" className="cursor-pointer">
            <ImageIcon />
          </label>
          <input
            type="file"
            className="hidden"
            id="inputFile"
            onChange={handleUploadImage}
          />
        </div>
        <div
          className="bg-blue-400 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit"
          onClick={handlePost}
        >
          Post
        </div>
      </div>
    </div>
  );
};

export default AddModal;
