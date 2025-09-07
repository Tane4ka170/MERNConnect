import axios from "axios";
import { useState } from "react";

const MessageModal = ({ selfData, userData }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    await axios
      .post(
        "http://localhost:1478/api/conversation/add-conversation",
        { receiverId: userData?._id, message },
        { withCredentials: true }
      )
      .then((res) => window.location.reload())
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.error);
      });
  };
  return (
    <div className="my-5">
      <div className="w-full mb-4">
        <textarea
          cols={10}
          rows={10}
          className="p-2 mt-1 w-full border-1 rounded-md"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div
        onClick={handleSendMessage}
        className="bg-blue-900 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl"
      >
        Send
      </div>
    </div>
  );
};

export default MessageModal;
