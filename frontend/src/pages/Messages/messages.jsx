import Card from "../../components/Card/card";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Conversation from "../../components/Conversation/conversation";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ImageIcon from "@mui/icons-material/Image";
import Advertisement from "../../components/Advertisement/advertisement";

const Messages = () => {
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
                <Conversation />
              </div>

              <div className="w-full md:w-[60%] border-gray-400">
                <div className="border-gray-950 py-2 px-4 border-b-2 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">User 1</p>
                    <p className="text-sm text-gray-950">
                      Baby, just say yes ✅
                    </p>
                  </div>
                  <div>
                    <MoreHorizIcon />
                  </div>
                </div>

                <div className="h-[360px] w-full overflow-auto border-b-1 border-gray-950">
                  <div className="w-full border-b-1 border-gray-950 gap-3 p-4">
                    <img
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/1200px-User_icon-cp.png"
                      }
                      alt=""
                      className="rounded-[100%] cursor-pointer w-16 h-15"
                    />
                    <div className="my-2">
                      <p className="text-sm font-semibold">User 1</p>
                      <p className="text-sm text-gray-950">
                        Baby, just say yes ✅
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    {/* for each messages */}
                    <div className="flex w-full cursor-pointer border-gray-800 gap-3 p-4">
                      <div className="shrink-0">
                        <img
                          src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/1200px-User_icon-cp.png"
                          }
                          alt=""
                          className="w-8 h-8 rounded-[100%] cursor-pointer"
                        />
                      </div>

                      <div className="mb-2 w-full">
                        <div className="text-md">User 1</div>
                        <div className="text-sm mt-6 hover:bg-gray-800 hover:text-white">
                          Shaking it off 🫧
                        </div>
                        <div className="my-2">
                          <img
                            src={
                              "https://sb.kaleidousercontent.com/67418/1920x1100/ffa7b88ebb/transparent.png"
                            }
                            alt=""
                            className="w-[240px] h-[180px] rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* space for typing the message */}
                <div className="p-2 w-full border-b-1 border-gray-600">
                  <textarea
                    rows={4}
                    className="bg-gray-200 outline-0 rounded-xl text-sm w-full p-3"
                    placeholder="Type a message"
                  ></textarea>
                </div>
                <div className="p-3 flex justify-between">
                  <div>
                    <label htmlFor="messageImage" className="cursor-pointer">
                      <ImageIcon />
                    </label>
                    <input type="file" id="messageImage" className="hidden" />
                  </div>
                  <div className="px-3 py-1 cursor-pointer rounded-2xl border-1 bg-blue-50">
                    Send
                  </div>
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
