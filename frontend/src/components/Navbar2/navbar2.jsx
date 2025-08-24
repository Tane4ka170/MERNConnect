import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import "./navbar2.css";
import { Link, useLocation } from "react-router-dom";

const Navbar2 = () => {
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000">
      <div className="flex gap-2 items-center">
        <Link to={"/"}>
          <img
            src={"https://cdn-icons-png.flaticon.com/512/942/942749.png"}
            alt="logo"
            className="w-8 h-8"
          />
        </Link>

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
                      "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                    }
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>

                <div>Virk</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden gap-10 md:flex">
        <Link
          className="flex flex-col items-center cursor-pointer"
          to={"/feeds"}
        >
          <HomeIcon
            sx={{ color: location.pathname === "/feeds" ? "black" : "gray" }}
          />
          <div
            className={`text-sm text-gray-950 ${
              location.pathname === "/feeds" ? "border-b-3" : ""
            }`}
          >
            Home
          </div>
        </Link>
        <Link
          className="flex flex-col items-center cursor-pointer"
          to={"/myNetwork"}
        >
          <Diversity3Icon
            sx={{
              color: location.pathname === "/mynetwork" ? "black" : "gray",
            }}
          />
          <div
            className={`text-sm text-gray-950 ${
              location.pathname === "/myNetwork" ? "border-b-3" : ""
            }`}
          >
            Connections
          </div>
        </Link>
        <Link
          className="flex flex-col items-center cursor-pointer"
          to={"/resume"}
        >
          <WorkIcon
            sx={{ color: location.pathname === "/resume" ? "black" : "gray" }}
          />
          <div
            className={`text-sm text-gray-950 ${
              location.pathname === "/resume" ? "border-b-3" : ""
            }`}
          >
            CV
          </div>
        </Link>
        <Link
          className="flex flex-col items-center cursor-pointer"
          to={"/messages"}
        >
          <MessageIcon
            sx={{ color: location.pathname === "/messages" ? "black" : "gray" }}
          />
          <div
            className={`text-sm text-gray-950 ${
              location.pathname === "/messages" ? "border-b-3" : ""
            }`}
          >
            Chats
          </div>
        </Link>
        <Link
          className="flex flex-col items-center cursor-pointer"
          to={"/notifications"}
        >
          <div className="relative flex items-center">
            <AddAlertIcon
              sx={{
                color:
                  location.pathname === "/notifications" ? "black" : "gray",
              }}
            />
            <span className="absolute -top-2 -right-3 p-1 rounded-full text-xs bg-red-600 text-white">
              1
            </span>
          </div>

          <div
            className={`text-sm text-gray-950 ${
              location.pathname === "/notifications" ? "border-b-3" : ""
            }`}
          >
            Alerts
          </div>
        </Link>
        <Link
          to={`/profile/fgfj`}
          className="flex flex-col items-center cursor-pointer"
        >
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            }
            alt="User icon-cp"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm text-gray-950">Me</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;
