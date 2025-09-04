import EditIcon from "@mui/icons-material/Edit";
import Advertisement from "../../components/Advertisement/advertisement";
import Card from "../../components/Card/card";
import Post from "../../components/Post/post";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/modal";
import ImageModal from "../../components/ImageModal/imageModal";
import EditInfoModal from "../../components/EditInfoModal/editInfoModal";
import AboutModal from "../../components/AboutModal/aboutModal";
import ExpModal from "../../components/ExpModal/expModal";
import MessageModal from "../../components/MessageModal/messageModal";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [imageSetModal, setImageSetModal] = useState(false);
  const [circularImage, setCircularImage] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [expModal, setExpModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState([]);
  const [ownData, setOwnData] = useState(null);
  const [updateExp, setUpdateExp] = useState({
    clicked: "",
    id: "",
    datas: {},
  });

  useEffect(() => {
    fetchDataOnLoad();
  }, [id]);

  const fetchDataOnLoad = async () => {
    try {
      const [userRes, postRes, ownRes] = await Promise.all([
        axios.get(`http://localhost:1478/api/auth/user/${id}`),
        axios.get(`http://localhost:1478/api/post/getTop5Post/${id}`),
        axios.get("http://localhost:1478/api/auth/self", {
          withCredentials: true,
        }),
      ]);

      setUserData(userRes.data.user);
      setPostData(postRes.data.posts);
      setOwnData(ownRes.data.user);
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    }
  };

  const handleImageModalOpenClose = () => {
    setImageSetModal((prev) => !prev);
  };

  const handleOnEditCover = () => {
    setImageSetModal(true);
    setCircularImage(false);
  };

  const handleCircularImage = () => {
    setImageSetModal(true);
    setCircularImage(true);
  };

  const handleInfoModal = () => {
    setInfoModal((prev) => !prev);
  };

  const handleAboutModal = () => {
    setAboutModal((prev) => !prev);
  };

  const handleExpModal = () => {
    if (expModal) {
      setUpdateExp({ clicked: "", id: "", datas: {} });
    }
    setExpModal((prev) => !prev);
  };

  const handleMessageModal = () => {
    setMessageModal((prev) => !prev);
  };

  const handleEditFunction = async (data) => {
    try {
      await axios.put(
        "http://localhost:1478/api/auth/update",
        { user: data },
        { withCredentials: true }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("An error occurred");
    }
  };

  const updateExpEdit = (id, data) => {
    setUpdateExp({ ...updateExp, clicked: true, id: id, data: data });
    setExpModal((prev) => !prev);
  };

  const amIFriend = () => {
    let arr = userData?.friends?.filter((item) => {
      return item === ownData?._id;
    });
    return arr.length;
  };

  const isInPendingList = () => {
    let arr = userData?.pending_friends?.filter((item) => {
      return item === ownData?._id;
    });
    return arr.length;
  };

  const isInSelfPendingList = () => {
    let arr = ownData?.pending_friends?.filter((item) => {
      return item === userData?._id;
    });
    return arr.length;
  };

  const checkFriendStatus = () => {
    if (amIFriend()) {
      return "Remove Connection";
    } else if (isInSelfPendingList()) {
      return "Accept Request";
    } else if (isInPendingList()) {
      return "Pending...";
    } else {
      return "Add Connection";
    }
  };

  const handleSendFriendRequest = async () => {
    if (checkFriendStatus() === "Pending...") return;
    if (checkFriendStatus() === "Add Connection") {
      await axios.post(
        "http://localhost:1478/api/auth/sendFriendReq",
        {
          receiver: userData?._id,
        },
        {
          withCredentials: true,
        }
      );
    }
  };
  return (
    <div className="px-5 xl:px-50 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-50 ">
      <div className="flex justify-between">
        {/* Left side main section */}
        <div className="w-full md:w-[70%]">
          <div>
            <Card padding={0}>
              <div className="w-full h-fit">
                <div className="relative w-full h-[200px]">
                  {userData?._id === ownData?._id && (
                    <div
                      className="absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white"
                      onClick={handleOnEditCover}
                    >
                      <EditIcon />
                    </div>
                  )}

                  <img
                    src={userData?.cover_pic}
                    alt=""
                    className="w-full h-[200px] rounded-tr-lg rounded-tl-lg"
                  />
                  <div
                    className="absolute object-cover top-24 left-6 z-10"
                    onClick={handleCircularImage}
                  >
                    <img
                      src={userData?.profile_pic}
                      alt="User"
                      className="rounded-full border-white border-2 cursor-pointer w-35 h-35"
                    />
                  </div>
                </div>

                <div className="mt-10 relative px-8 py-2">
                  {userData?._id === ownData?._id && (
                    <div
                      className="absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white"
                      onClick={handleInfoModal}
                    >
                      <EditIcon />
                    </div>
                  )}

                  <div className="w-full">
                    <div className="text-2xl">{userData?.f_name}</div>
                    <div className="text-gray-950">{userData?.headline}</div>
                    <div className="text-sm text-gray-400">
                      {userData?.curr_location}
                    </div>
                    <div className="text-md text-blue-600 w-fit cursor-pointer hover:underline">
                      {userData?.friends?.length} connections
                    </div>

                    <div className="md:flex w-full justify-between">
                      <div className="my-5 flex gap-5">
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold">
                          Available for
                        </div>
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold">
                          Share
                        </div>
                        {userData?._id === ownData?._id && (
                          <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold">
                            Sign out
                          </div>
                        )}
                      </div>
                      <div className="my-5 flex gap-5">
                        {amIFriend() ? (
                          <div
                            className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold"
                            onClick={handleMessageModal}
                          >
                            Send a note
                          </div>
                        ) : null}
                        {userData?._id === ownData?._id ? null : (
                          <div
                            className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold"
                            onClick={handleSendFriendRequest}
                          >
                            {checkFriendStatus()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">About</div>
                {userData?._id === ownData?._id && (
                  <div className="cursor-pointer" onClick={handleAboutModal}>
                    <EditIcon />
                  </div>
                )}
              </div>
              <div className="text-gray-800 text-md w-[80%]">
                {userData?.about}
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Skills</div>
              </div>
              <div className="text-gray-800 text-md my-2 w-full flex gap-4 flex-wrap">
                {userData?.skills?.map((item, index) => (
                  <div
                    className="py-2 px-3 cursor-pointer bg-blue-100 rounded-lg"
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Activities</div>
              </div>
              <div className="cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white font-semibold">
                Posts
              </div>

              {/* Parent div for scrollable activities */}
              <div className="overflow-x-auto my-2 flex gap-1 overflow-y-hidden w-full">
                {postData.map((item, ind) => (
                  <Link
                    to={`/profile/${id}/activities/${item?.id}`}
                    key={ind}
                    className="cursor-pointer shrink-0 w-[350px] h-[560px]"
                  >
                    <Post profile={1} item={item} personalData={ownData} />
                  </Link>
                ))}
              </div>

              <div className="w-full flex justify-center items-center">
                <Link
                  to={`/profile/${id}/activities`}
                  className="p-2 rounded-xl cursor-pointer hover:bg-gray-400 hover:text-white"
                >
                  View All Posts <ArrowCircleRightIcon />
                </Link>
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Experience</div>
                <div className="cursor-pointer" onClick={handleExpModal}>
                  <AddIcon />
                </div>
              </div>
              <div className="mt-5">
                {userData?.experience?.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 border-t-1 border-gray-100 flex justify-between"
                  >
                    <div>
                      <div className="text-lg">{item?.designation}</div>
                      <div className="text-sm">{item?.company_name}</div>
                      <div className="text-sm text-gray-900">
                        {item?.duration}
                      </div>
                      <div className="text-sm text-gray-900">
                        {item?.location}
                      </div>
                    </div>
                    {userData?._id === ownData?._id && (
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          updateExpEdit(item._id);
                        }}
                      >
                        <EditIcon />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex md:w-[28%]">
          <div className="sticky top-19">
            <Advertisement />
          </div>
        </div>
      </div>

      {imageSetModal && (
        <Modal closeModal={handleImageModalOpenClose} title="Add Image">
          <ImageModal
            handleEditFunction={handleEditFunction}
            selfData={ownData}
            isCircular={circularImage}
          />
        </Modal>
      )}

      {infoModal && (
        <Modal title="Modify Details" closeModal={handleInfoModal}>
          <EditInfoModal
            handleEditFunction={handleEditFunction}
            selfData={ownData}
          />
        </Modal>
      )}

      {aboutModal && (
        <Modal title="Update Bio" closeModal={handleAboutModal}>
          <AboutModal
            handleEditFunction={handleEditFunction}
            selfData={ownData}
          />
        </Modal>
      )}

      {expModal && (
        <Modal title="Experience" closeModal={handleExpModal}>
          <ExpModal
            handleEditFunction={handleEditFunction}
            selfData={ownData}
            updateExp={updateExp}
            setUpdateExp={updateExpEdit}
          />
        </Modal>
      )}

      {messageModal && (
        <Modal title="Send" closeModal={handleMessageModal}>
          <MessageModal />
        </Modal>
      )}
    </div>
  );
};

export default Profile;
