import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddModal = (props) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [desc, setDesc] = useState("");

  const handlePost = async () => {
    if ((desc.trim().length === 0) & !imageUrl) {
      return toast.error("Kindly provide at least one field");
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
          cols={50}
          rows={10}
          placeholder="What's on your mind?"
          className="my-3 outline-0 text-xl p-2"
        ></textarea>
      </div>
      {imageUrl && (
        <div>
          <img
            src={
              "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
            }
            alt=""
            className="w-10 h-10 rounded-xl "
          />
        </div>
      )}

      <div className="flex justify-between">
        <div className="my-2">
          <label htmlFor="inputFile" className="cursor-pointer">
            <ImageIcon />
          </label>
          <input type="file" className="hidden" id="inputFile" />
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
