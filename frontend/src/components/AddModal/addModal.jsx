import ImageIcon from "@mui/icons-material/Image";

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
        <img
          src={
            "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
          }
          alt=""
          className="w-10 h-10 rounded-xl "
        />
      </div>

      <div className="flex justify-between">
        <div className="my-2">
          <label htmlFor="inputFile" className="cursor-pointer">
            <ImageIcon />
          </label>
          <input type="file" className="hidden" id="inputFile" />
        </div>
        <div className="bg-blue-400 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit">
          Post
        </div>
      </div>
    </div>
  );
};

export default AddModal;
