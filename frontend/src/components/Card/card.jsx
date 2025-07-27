import React from "react";

const Card = (props) => {
  return (
    <div
      className={`w-full h-[100%] flex flex-col border-1 border-gray-100 bg-white rounded-md ${
        props.padding ? "p-5" : "p-0"
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
