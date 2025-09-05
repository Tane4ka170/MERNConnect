import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import "./navbar2.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Navbar2 = () => {
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();
  const [userData, setUserData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [searchUser, setSearchUser] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      searchAPICall();
    }
  }, []);

  const searchAPICall = async () => {
    await axios
      .get(`http://localhost:1478/api/auth/findUser?query=${debouncedTerm}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.users.length) {
          setDropDown(true);
        }
        setSearchUser(res.data.users);
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.error);
      });
  };

  useEffect(() => {
    let userData = localStorage.getItem("userInfo");
    setUserData(userData ? JSON.parse(userData) : null);
  }, []);

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
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />

          {searchUser.length > 0 && debouncedTerm.length !== 0 && (
            <div className="absolute w-88 left-0 bg-gray-400">
              {searchUser.map((item, index) => {
                return (
                  <Link
                    to={`/profile/${item?._id}`}
                    key={index}
                    className="flex gap-2 items-center border-b-1 mb-1 cursor-pointer"
                    onClick={() => setDebouncedTerm("")}
                  >
                    <div>
                      <img
                        src={item?.profile_pic}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                    </div>

                    <div>{item?.f_name}</div>
                  </Link>
                );
              })}
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
          to={`/profile/${userData?._id}`}
          className="flex flex-col items-center cursor-pointer"
        >
          <img
            src={userData?.profile_pic}
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
