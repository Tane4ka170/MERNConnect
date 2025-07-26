import React from "react";

const Card = (props) => {
  return (
    <div className="w-full h-[100%] flex flex-col border-1 border-gray-100 bg-white rounded-md">
      {props.children}
    </div>
  );
};

export default Card;
