import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/card";
import Post from "../../components/Post/post";
import ProfileCard from "../../components/ProfileCard/profileCard";
import Advertisement from "../../components/Advertisement/advertisement";

const SingleActivity = () => {
  const { id, postId } = useParams;
  const [ownData, setOwnData] = useState(null);
  const [post, setPost] = useState(null);

  const fetchDataOnLoad = async () => {
    await axios
      .get(`http://localhost:1478/api/post/getPostById/${postId}`)
      .then((res) => {
        setPost(res.data.post);
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    fetchDataOnLoad();
    let userData = localStorage.getItem("userInfo");
    setOwnData(userData ? JSON.parse(userData) : null);
  }, []);
  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      {/* Left */}
      <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
        <div className="h-fit">
          <ProfileCard data={post?.user} />
        </div>
      </div>

      {/* Middle */}
      <div className="w-[100%] py-5 sm:w-[50%]">
        <div>
          <Card padding={1}>
            <div>
              <Post personalData={ownData} item={post} />
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

export default SingleActivity;
