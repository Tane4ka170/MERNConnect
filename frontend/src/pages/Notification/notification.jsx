import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card/card";
import ProfileCard from "../../components/ProfileCard/profileCard";
import Advertisement from "../../components/Advertisement/advertisement";

const Notification = () => {
  const [ownData, setOwnData] = useState();
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userData = localStorage.getItem("userInfo");
    setOwnData(userData ? JSON.parse(userData) : null);

    fetchNotificationData();
  }, []);

  const fetchNotificationData = async () => {
    await axios
      .get("http://localhost:1478/api/notification", {
        withCredentials: true,
      })
      .then((res) => {
        setNotifications(res.data.notifications);
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
  };

  const handleOnClickNotification = async (item) => {
    await axios
      .put(
        "http://localhost:1478/api/notification/isRead",
        {
          notificationId: item._id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (item.type === "comment") {
          navigate(`/profile/${ownData?.id}/activities/${item?.postId}`);
        } else {
          navigate("/myNetwork");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
  };
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      {/* Left */}
      <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
        <div className="h-fit">
          <ProfileCard data={ownData} />
        </div>
      </div>

      {/* Middle */}
      <div className="w-[100%] py-5 sm:w-[50%]">
        <div>
          <Card padding={0}>
            <div className="w-full">
              {/* For each notification */}
              {notifications.map((item, index) => {
                return (
                  <div
                    className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-700 p-3 ${
                      item?.isRead ? "bg-gray-300" : "bg-blue-50"
                    }`}
                    onClick={handleOnClickNotification(item)}
                  >
                    <img
                      src={item?.sender?.profile_pic}
                      alt=""
                      className="rounded-4xl cursor-pointer w-15 h-15"
                    />
                    <div>{item?.content}</div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>

      {/* Right */}
      <div className="w-[26%] py-5 hidden md:block">
        <div className="my-5 sticky top-19">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default Notification;
