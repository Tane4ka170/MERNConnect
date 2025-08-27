import { useEffect, useState } from "react";
import Card from "../Card/card";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Post = ({ profile, item, key, personalData }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [noOfLikes, setNoOfLikes] = useState(item?.likes.length);

  const desc = item?.desc;

  useEffect(() => {
    let selfId = personalData?._id;
    item?.likes?.map((item) => {
      if (item.toString() === selfId.toString()) {
        setLiked(true);
        return;
      } else {
        setLiked(false);
      }
    });
  }, []);

  const handleLikeFuction = async () => {
    await axios
      .post(
        "http://localhost:1478/api/post/likeDislike",
        {
          postId: item?._id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (liked) {
          setNoOfLikes((prev) => prev - 1);
          setLiked(false);
        } else {
          setLiked(true);
          setNoOfLikes((prev) => prev + 1);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
  };

  const handleCommentBoxOpenClose = async () => {
    setShowComments((prev) => !prev); // toggle
    if (!showComments) {
      try {
        const res = await axios.get(
          `http://localhost:1478/api/comment/${item?._id}`
        );
        setComments(res.data.comments || []);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSendComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const res = await axios.post(
        "http://localhost:1478/api/comment",
        {
          postId: item?._id,
          comment: newComment,
        },
        { withCredentials: true }
      );
      setComments((prev) => [...prev, res.data.comment]);
      setNewComment("");
    } catch (err) {
      console.error(err);
      alert("Failed to add comment");
    }
  };
  return (
    <Card padding={0}>
      <div className="flex gap-3 p-4">
        <div className="w-12 h-12 rounded-4xl">
          <img
            src={item?.user?.profile_pic}
            alt="User"
            className="rounded-4xl w-12 h-12 border-2 border-white cursor-pointer"
          />
        </div>

        <div>
          <div className="text-lg font-semibold">{item?.user?.f_name}</div>
          <div className="text-xs text-gray-950">{item?.user?.headline}</div>
        </div>
      </div>

      {desc.length > 0 && (
        <div className="text-md p-4 my-3 whitespace-pre-line flex-grow">
          {seeMore ? desc : `${desc.slice(0, 100)}...`}
          {desc.length < 50 ? null : (
            <span
              className="cursor-pointer text-gray-700"
              onClick={() => setSeeMore((prev) => !prev)}
            >
              {seeMore ? "Show Less" : "Show More"}
            </span>
          )}
        </div>
      )}

      {item?.imageLink && (
        <div className="w-[100%] h-[300px]">
          <img src={item?.imageLink} alt="" className="w-full h-full" />
        </div>
      )}

      <div className="my-2 p-4 flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <ThumbUpIcon sx={{ color: "blue", fontSize: 20 }} />{" "}
          <div className="text-sm text-gray-900"> {noOfLikes} Likes</div>
        </div>
        <div className="flex gap-1 items-center">
          <ThumbUpIcon sx={{ color: "blue", fontSize: 20 }} />{" "}
          <div className="text-sm text-gray-900">
            {" "}
            {item?.comments} Comments
          </div>
        </div>
      </div>

      {!profile && (
        <div className="flex p-1">
          <div
            className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-400"
            onClick={handleLikeFuction}
          >
            {liked ? (
              <ThumbUpIcon sx={{ fontSize: 22, color: "blue" }} />
            ) : (
              <ThumbUpOffAltIcon sx={{ fontSize: 22, color: "blue" }} />
            )}{" "}
            <span>{liked ? "Liked" : "Like"}</span>{" "}
          </div>
          <div
            className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-400"
            onClick={handleCommentBoxOpenClose}
          >
            <CommentIcon sx={{ fontSize: 22, color: "blue" }} />{" "}
            <span>Comment</span>{" "}
          </div>
          <div className="w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-400">
            <SendIcon sx={{ fontSize: 22, color: "blue" }} /> <span>Share</span>{" "}
          </div>
        </div>
      )}

      {/* Comment section */}
      {showComments && (
        <div className="p-4 w-full">
          <div className="flex gap-2 items-center">
            <img
              src={personalData?.profile_pic}
              alt="User"
              className="rounded-full w-12 h-12 border-2 border-white cursor-pointer"
            />

            <form className="w-full flex gap-2" onSubmit={handleSendComment}>
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-500"
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                type="submit"
                className="cursor-pointer bg-blue-400 text-white rounded-3xl py-1 px-3"
              >
                Send
              </button>
            </form>
          </div>

          {/* Other's comment section */}
          <div className="w-full p-4">
            {comments?.map((item, index) => {
              return (
                <div className="my-4">
                  <div className="flex gap-3">
                    <img
                      src={item?.user?.profile_pic}
                      alt="User"
                      className="rounded-full w-12 h-12 border-2 border-white cursor-pointer"
                    />
                    <div className="cursor-pointer">
                      <div className="text-md">{item?.user?.f_name}</div>
                      <div className="text-sm text-gray-950">
                        {item?.user?.headline}
                      </div>
                    </div>
                  </div>

                  <div className="px-11 my-2">{item?.comment}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;
