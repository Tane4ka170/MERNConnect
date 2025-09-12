import { useEffect, useState } from "react";

import axios from "axios";

import ImageIcon from "@mui/icons-material/Image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import socket from "../../socket";
import Card from "../../components/Card/card";
import Conversation from "../../components/Conversation/conversation";
import Advertisement from "../../components/Advertisement/advertisement";
import { useRef } from "react";

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [ownData, setOwnData] = useState(null);
  const [activeConvId, setActiveConvId] = useState(null);
  const [selectedConvDetails, setSelectedConvDetails] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgLink, setImgLink] = useState(null);
  const [messageText, setMessageText] = useState("");

  const ref = useRef();

  useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let userData = localStorage.getItem("userInfo");
    setOwnData(userData ? JSON.parse(userData) : null);
    fetchConversationOnLoad();
  }, []);

  const fetchConversationOnLoad = async () => {
    await axios
      .get("http://localhost:1478/api/conversation/get-conversation", {
        withCredentials: true,
      })
      .then((res) => {
        setConversations(res.data.conversations);
        setSelectedConvDetails(res.data.conversations[0]?._id);
        socket.emit("joinConversation", res.data.conversations[0]?._id);
        let ownId = ownData?._id;
        let arr = res.data.conversations[0]?.members?.filter(
          (it) => it._id !== ownId
        );
        setSelectedConvDetails(arr[0]);
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
  };

  const handleSelectedConv = (id, userData) => {
    setActiveConvId(id);
    socket.emit("joinConversation");
    userData(userData);
  };

  useEffect(() => {
    if (activeConvId) {
      fetchMessages();
    }
  }, [activeConvId]);

  const fetchMessages = async () => {
    await axios
      .get(`http://localhost:1478/api/message/${activeConvId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMessages(res?.data?.message);
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
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
      setImgLink(imageUrl);
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    await axios
      .post(
        `http://localhost:1478/api/message`,
        {
          conversation: activeConvId,
          message: messageText,
          picture: imgLink,
        },
        { withCredentials: true }
      )
      .then((res) => {
        socket.emit("sendMessage", activeConvId, res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
  };

  useEffect(() => {
    socket.on("receiveMessage", (response) => {
      setMessages([...messages, response]);
      setMessageText("");
    });
  }, []);

  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      <div className="w-full justify-between flex pt-5">
        {/* Left side */}
        <div className="w-full md:w-[70%]">
          <Card padding={0}>
            <div className="border-b-1 border-gray-100 px-5 py-2 font-semibold text-lg">
              Chats
            </div>

            <div className="border-b-1 border-gray-500 px-5 py-2">
              <div className="py-1 px-3 cursor-pointer hover:bg-green-50 bg-green-200 font-semibold flex gap-2 w-fit rounded-2xl">
                Concentrated <ArrowCircleDownIcon />{" "}
              </div>
            </div>

            {/* div for chats */}
            <div className="w-full md:flex">
              <div className="h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-500">
                {/* For each chat */}
                {conversations.map((item, index) => {
                  return (
                    <Conversation
                      item={item}
                      key={index}
                      ownData={ownData}
                      handleSelectedConv={handleSelectedConv}
                      activeConvId={activeConvId}
                    />
                  );
                })}
              </div>

              <div className="w-full md:w-[60%] border-gray-400">
                <div className="border-gray-950 py-2 px-4 border-b-2 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">
                      {selectedConvDetails?.f_name}
                    </p>
                    <p className="text-sm text-gray-950">
                      {selectedConvDetails?.headline}
                    </p>
                  </div>
                  <div>
                    <MoreHorizIcon />
                  </div>
                </div>

                <div className="h-[360px] w-full overflow-auto border-b-1 border-gray-950">
                  <div className="w-full border-b-1 border-gray-950 gap-3 p-4">
                    <img
                      src={selectedConvDetails?.profile_pic}
                      alt=""
                      className="rounded-[100%] cursor-pointer w-16 h-15"
                    />
                    <div className="my-2">
                      <p className="text-sm font-semibold">
                        {selectedConvDetails?.f_name}
                      </p>
                      <p className="text-sm text-gray-950">
                        {selectedConvDetails?.headline}
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    {/* for each messages */}
                    {messages?.map((item, index) => {
                      return (
                        <div
                          className="flex w-full cursor-pointer border-gray-800 gap-3 p-4"
                          key={index}
                          ref={ref}
                        >
                          <div className="shrink-0">
                            <img
                              src={item?.sender?.profile_pic}
                              alt=""
                              className="w-8 h-8 rounded-[100%] cursor-pointer"
                            />
                          </div>

                          <div className="mb-2 w-full">
                            <div className="text-md">
                              {item?.sender?.f_name}
                            </div>
                            <div className="text-sm mt-6 hover:bg-gray-800 hover:text-white">
                              {item?.message}
                            </div>
                            {item?.picture && (
                              <div className="my-2">
                                <img
                                  src={item?.picture}
                                  alt=""
                                  className="w-[240px] h-[180px] rounded-md"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* space for typing the message */}
                <div className="p-2 w-full border-b-1 border-gray-600">
                  <textarea
                    rows={4}
                    className="bg-gray-200 outline-0 rounded-xl text-sm w-full p-3"
                    placeholder="Type a message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  ></textarea>
                </div>
                <div className="p-3 flex justify-between">
                  <div>
                    <label htmlFor="messageImage" className="cursor-pointer">
                      <ImageIcon />
                    </label>
                    <input
                      type="file"
                      id="messageImage"
                      className="hidden"
                      onClick={handleInputImage}
                    />
                  </div>
                  {!loading && (
                    <div
                      className="px-3 py-1 cursor-pointer rounded-2xl border-1 bg-blue-50"
                      onClick={handleSendMessage}
                    >
                      Send
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right side */}
        <div className="hidden md:flex md:w-[25%]">
          <div className="sticky top-19">
            <Advertisement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
