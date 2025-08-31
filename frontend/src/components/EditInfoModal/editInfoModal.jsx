import React, { useState } from "react";

const EditInfoModal = ({ handleEditFunction, selfData }) => {
  const [data, setData] = useState({
    f_name: selfData.f_name,
    headline: selfData.headline,
    curr_company: selfData.curr_company,
    curr_location: selfData.curr_location,
  });

  const onChangeHandle = (event, key) => {
    setData({ ...data, [key]: event.target.value });
  };

  const handleSaveBtn = async () => {
    let newData = { ...selfData, ...data };
    handleEditFunction(newData);
  };
  return (
    <div className="mt-8 w-full h-[350px] overflow-auto">
      <div className="w-full mb-4">
        <label>Full Name*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Type your full name"
          value={data.f_name}
          onChange={(e) => onChangeHandle(e, "f_name")}
        />
      </div>

      <div className="w-full mb-4">
        <label>Headline*</label>
        <br />
        <textarea
          cols={10}
          rows={3}
          className="p-2 mt-1 w-full border-1 rounded-md"
          value={data.headline}
          onChange={(e) => onChangeHandle(e, "headline")}
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label>Current Company*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Type your current company name"
          value={data.curr_company}
          onChange={(e) => onChangeHandle(e, "curr_company")}
        />
      </div>

      <div className="w-full mb-4">
        <label>Current Location*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Type your current location"
          value={data.curr_location}
          onChange={(e) => onChangeHandle(e, "curr_location")}
        />
      </div>
      <div
        className="bg-blue-900 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl"
        onClick={handleSaveBtn}
      >
        Save
      </div>
    </div>
  );
};

export default EditInfoModal;
