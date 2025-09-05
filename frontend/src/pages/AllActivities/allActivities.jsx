import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/card";
import Post from "../../components/Post/post";
import ProfileCard from "../../components/ProfileCard/profileCard";
import Advertisement from "../../components/Advertisement/advertisement";

const AllActivities = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [ownData, setOwnData] = useState(null);

  const fetchDataOnLoad = async () => {
    await axios
      .get(`http://localhost:1478/api/post/getAllPostByUser/${id}`)
      .then((res) => {
        setPost(res?.data?.posts);
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
  }, [id]);

  return (
    <div className="px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-300">
      {/* Left */}
      <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
        <div className="h-fit">
          <ProfileCard data={post[0]?.user} />
        </div>
      </div>

      {/* Middle */}
      <div className="w-[100%] py-5 sm:w-[50%]">
        <div>
          <Card padding={1}>
            <div className="text-xl">Full Activity</div>
            <div className="cursor-pointer w-fit p-2 border-1 rounded-4xl bg-green-200 my-2 font-semibold">
              Posts
            </div>
            <div className="my-2 flex flex-col gap-2">
              {post?.map((item, index) => {
                return (
                  <div key={index}>
                    <Post item={item} personalData={ownData} />
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

export default AllActivities;
