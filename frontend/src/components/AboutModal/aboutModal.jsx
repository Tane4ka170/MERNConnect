import React from "react";

const AboutModal = () => {
  return (
    <div className="my-8">
      <div className="w-full mb-4">
        <label>About*</label>
        <br />
        <textarea
          cols={10}
          rows={3}
          className="p-2 mt-1 w-full border-1 rounded-md"
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label>Skills*(separate with commas)</label>
        <br />
        <textarea
          cols={10}
          rows={3}
          className="p-2 mt-1 w-full border-1 rounded-md"
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="resumeUpload"
          className="p-2 bg-blue-800 text-white rounded-lg cursor-pointer"
        >
          Upload Your Resume
        </label>
        <input type="file" className="hidden" id="resumeUpload" />
      </div>
      <div className="bg-blue-900 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
        Save
      </div>
    </div>
  );
};

export default AboutModal;
