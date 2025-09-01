import { useState } from "react";

const ExpModal = ({ handleEditFunction, selfData }) => {
  const [data, setData] = useState({
    designation: "",
    company_name: "",
    duration: "",
    location: "",
  });

  const onChangeHandle = (event, key) => {
    setData({ ...data, [key]: event.target.value });
  };

  const handleOnSave = async () => {
    let expArr = [...selfData?.experience, data];
    let newData = { ...selfData, experience: expArr };
    handleEditFunction(newData);
  };
  return (
    <div className="mt-8 w-full h-[350px] overflow-auto">
      <div className="w-full mb-4">
        <label>Role*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Specify your role"
          value={data.designation}
          onChange={(event) => onChangeHandle(event, "designation")}
        />
      </div>

      <div className="w-full mb-4">
        <label>Company*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Type your company name"
          value={data.company_name}
          onChange={(event) => onChangeHandle(event, "company_name")}
        />
      </div>

      <div className="w-full mb-4">
        <label>Duration*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Specify time period"
          value={data.duration}
          onChange={(event) => onChangeHandle(event, "duration")}
        />
      </div>

      <div className="w-full mb-4">
        <label>Place*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Input location"
          value={data.location}
          onChange={(event) => onChangeHandle(event, "location")}
        />
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

export default ExpModal;
