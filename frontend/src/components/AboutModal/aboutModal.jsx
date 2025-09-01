import axios from "axios";
import { useState } from "react";

const AboutModal = ({ handleEditFunction, selfData }) => {
  const [data, setData] = useState({
    about: selfData?.about,
    skillInp: selfData?.skills?.join(","),
    resume: selfData?.resume,
  });
  const [loading, setLoading] = useState(false);

  const onChangeHandle = (event, key) => {
    setData({ ...data, [key]: event.target.value });
  };

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
      setData({ ...data, resume: imageUrl });
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOnSave = async () => {
    let arr = (data?.skillInp || "")
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s);

    let newData = {
      ...selfData,
      about: data?.about,
      skills: arr,
      resume: data?.resume,
    };
    handleEditFunction(newData);
  };
  return (
    <div className="my-8">
      <div className="w-full mb-4">
        <label>About*</label>
        <br />
        <textarea
          cols={10}
          rows={3}
          className="p-2 mt-1 w-full border-1 rounded-md"
          value={data.about}
          onChange={(event) => onChangeHandle(event, "about")}
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label>Skills*(separate with commas)</label>
        <br />
        <textarea
          cols={10}
          rows={3}
          className="p-2 mt-1 w-full border-1 rounded-md"
          value={data.skillInp}
          onChange={(event) => onChangeHandle(event, "skillInp")}
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="resumeUpload"
          className="p-2 bg-blue-800 text-white rounded-lg cursor-pointer"
        >
          Upload Your Resume
        </label>
        <input
          type="file"
          className="hidden"
          id="resumeUpload"
          onChange={handleInputImage}
        />
        {data.resume && <div className="my-2">{data.resume}</div>}
      </div>
      <div
        className="bg-blue-900 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl"
        onClick={handleOnSave}
      >
        Save
      </div>
    </div>
  );
};

export default AboutModal;
