import EditIcon from "@mui/icons-material/Edit";
import Advertisement from "../../components/Advertisement/advertisement";
import Card from "../../components/Card/card";
import Post from "../../components/Post/post";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Modal from "../../components/Modal/modal";
import ImageModal from "../../components/ImageModal/imageModal";
import EditInfoModal from "../../components/EditInfoModal/editInfoModal";
import AboutModal from "../../components/AboutModal/aboutModal";
import ExpModal from "../../components/ExpModal/expModal";
import MessageModal from "../../components/MessageModal/messageModal";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [imageSetModal, setImageSetModal] = useState(false);
  const [circularImage, setCircularImage] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [expModal, setExpModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

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
    setExpModal((prev) => !prev);
  };

  const handleMessageModal = () => {
    setMessageModal((prev) => !prev);
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
                  <div
                    className="absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white"
                    onClick={handleOnEditCover}
                  >
                    <EditIcon />
                  </div>
                  <img
                    src={
                      "https://sb.kaleidousercontent.com/67418/1920x1100/ffa7b88ebb/transparent.png"
                    }
                    alt=""
                    className="w-full h-[200px] rounded-tr-lg rounded-tl-lg"
                  />
                  <div
                    className="absolute object-cover top-24 left-6 z-10"
                    onClick={handleCircularImage}
                  >
                    <img
                      src={
                        "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                      }
                      alt="User"
                      className="rounded-full border-white border-2 cursor-pointer w-35 h-35"
                    />
                  </div>
                </div>

                <div className="mt-10 relative px-8 py-2">
                  <div
                    className="absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white"
                    onClick={handleInfoModal}
                  >
                    <EditIcon />
                  </div>
                  <div className="w-full">
                    <div className="text-2xl">Qadim Virk</div>
                    <div className="text-gray-950">
                      I work as a Full-Stack Developer{" "}
                    </div>
                    <div className="text-sm text-gray-400">
                      Hinjawadi, India
                    </div>
                    <div className="text-md text-blue-600 w-fit cursor-pointer hover:underline">
                      81 connections
                    </div>

                    <div className="md:flex w-full justify-between">
                      <div className="my-5 flex gap-5">
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold">
                          Available for
                        </div>
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold">
                          Share
                        </div>
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold">
                          Sign out
                        </div>
                      </div>
                      <div className="my-5 flex gap-5">
                        <div
                          className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold"
                          onClick={handleMessageModal}
                        >
                          Send a note
                        </div>
                        <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-600 text-white font-semibold">
                          Add connection
                        </div>
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
                <div className="cursor-pointer" onClick={handleAboutModal}>
                  <EditIcon />
                </div>
              </div>
              <div className="text-gray-800 text-md w-[80%]">
                Passionate and results-driven Full-Stack Developer with over 5
                years of experience building scalable web applications and
                modern digital solutions. Skilled in JavaScript, React, Node.js,
                and cloud technologies. At Issac and Sons, I focus on delivering
                end-to-end software solutions that enhance performance, user
                experience, and business growth. I'm always excited to
                collaborate on innovative projects, solve complex problems, and
                continuously improve my skills. Based in Hinjawadi — the heart
                of India’s tech scene — I thrive in fast-paced environments
                where creativity and code meet.
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">About</div>
              </div>
              <div className="text-gray-800 text-md my-2 w-full flex gap-4 flex-wrap">
                <div className="py-2 px-3 cursor-pointer bg-blue-100 rounded-lg">
                  Redux / Zustand / Context API
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-100 rounded-lg">
                  Postman
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-100 rounded-lg">
                  REST APIs & GraphQL
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-100 rounded-lg">
                  MongoDB / Mongoose
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-100 rounded-lg">
                  AWS / Azure / Vercel / Netlify
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-100 rounded-lg">
                  TypeScript
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-100 rounded-lg">
                  Git & GitHub
                </div>
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
                <Link
                  to={`/profile/${id}/activities/58`}
                  className="cursor-pointer shrink-0 w-[350px] h-[560px]"
                >
                  <Post profile={1} />
                </Link>
                <Link
                  to={`/profile/${id}/activities/59`}
                  className="cursor-pointer shrink-0 w-[350px] h-[560px]"
                >
                  <Post profile={1} />
                </Link>
                <Link
                  to={`/profile/${id}/activities/60`}
                  className="cursor-pointer shrink-0 w-[350px] h-[560px]"
                >
                  <Post profile={1} />
                </Link>
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
                <div className="p-2 border-t-1 border-gray-100 flex justify-between">
                  <div>
                    <div className="text-lg">Full-Stack Developer</div>
                    <div className="text-sm">Issac and Sons</div>
                    <div className="text-sm text-gray-900">
                      Mar 2022 – Present
                    </div>
                    <div className="text-sm text-gray-900">
                      Hinjawadi, India
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <EditIcon />
                  </div>
                </div>
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
          <ImageModal isCircular={circularImage} />
        </Modal>
      )}

      {infoModal && (
        <Modal title="Modify Details" closeModal={handleInfoModal}>
          <EditInfoModal />
        </Modal>
      )}

      {aboutModal && (
        <Modal title="Update Bio" closeModal={handleAboutModal}>
          <AboutModal />
        </Modal>
      )}

      {expModal && (
        <Modal title="Experience" closeModal={handleExpModal}>
          <ExpModal />
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
