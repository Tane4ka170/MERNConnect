import { useState } from "react";
import "./navbar2.css";

const Navbar2 = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000">
      <div className="flex gap-2 items-center">
        <div>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/942/942749.png"}
            alt="logo"
            className="w-8 h-8"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            className="searchInput w-70 bg-gray-50"
            placeholder="Search"
          />

          {dropDown && (
            <div className="absolute w-88 left-0 bg-gray-400">
              <div className="flex gap-2 items-center border-b-1 mb-1 cursor-pointer">
                <div>
                  <img
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/1200px-User_icon-cp.png"
                    }
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>

                <div>Danish</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
