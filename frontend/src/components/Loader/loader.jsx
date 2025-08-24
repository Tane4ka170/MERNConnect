import "./loader.css";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-100 h-full bg-gray-600/85 flex justify-center items-center">
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
