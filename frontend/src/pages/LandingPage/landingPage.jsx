import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";

const LandingPage = (props) => {
  return (
    <div className="my-4 py-[50px] md:pl-[120px] px-5 md:flex justify-between">
      <div className="md:w-[40%]">
        <div className="text-4xl mx-auto text-gray-700">
          Step Into Your Professional Network
          <div className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer">
            <GoogleLoginComp changeLoginValue={props.changeLoginValue} />
          </div>
          <Link
            to={"/login"}
            className="flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%]  justify-between text-black hover:bg-gray-600 border-2 cursor-pointer"
          >
            Log in using your email
          </Link>
          <div className="mx-auto mb-4 text-sm w-[70%] mt-6">
            By selecting “Continue,” you confirm that you agree to{" "}
            <span className="text-blue-700 cursor-pointer hover:underline">
              NetWorkin’s User Agreement
            </span>
            ,{" "}
            <span className="text-blue-700 cursor-pointer hover:underline">
              Privacy Policy
            </span>{" "}
            , and{" "}
            <span className="text-blue-700 cursor-pointer hover:underline">
              Cookie Policy
            </span>
            .
          </div>
          <Link
            to={"/signUp"}
            className="mx-auto text-center mb-4 text-lg w-[70%] mt-4"
          >
            {" "}
            Not a member yet?{" "}
            <span className="text-blue-900 cursor-pointer hover:underline">
              Sign up for NetWorkin
            </span>
          </Link>
        </div>
      </div>

      <div className="md:w-[50%] h-120">
        <img
          src={
            "https://images.squarespace-cdn.com/content/v1/5d4d836df83bdc0001fbe230/1615926475963-0WFIF3X9CM1XEUQ3FJ5Z/unsplash-image-POzx_amnWJw.jpg"
          }
          alt="Image"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default LandingPage;
