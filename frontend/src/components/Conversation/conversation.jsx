const Conversation = (item, key) => {
  return (
    <div
      className="flex items-center w-full cursor-pointer border-b-1 border-gray-400 gap-3 p-4 hover:bg-gray-600 hover:text-white"
      key={key}
    >
      <div className="shrink-0">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/User_icon-cp.png/1200px-User_icon-cp.png"
          }
          alt="User icon-cp"
          className="w-12 h-12 rounded-[100%] cursor-pointer"
        />
      </div>
      <div>
        <div className="text-md">Alex</div>
        <div className="text-sm text-gray-500">Frontend Developer</div>
      </div>
    </div>
  );
};

export default Conversation;
