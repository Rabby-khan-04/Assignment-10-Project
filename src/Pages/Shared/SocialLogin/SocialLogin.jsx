import React from "react";
import googleIcon from "../../../assets/icons/google.svg";
import githubIcon from "../../../assets/icons/github.svg";

const SocialLogin = () => {
  return (
    <>
      <button className="flex items-center justify-center w-full mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
        <div className="px-4 py-3">
          <img src={googleIcon} className="h-10" alt="" />
        </div>
        <span className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Google
        </span>
      </button>
      <button className="flex items-center justify-center w-full mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
        <div className="px-4 py-3">
          <img src={githubIcon} className="h-10" alt="" />
        </div>
        <span className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Github
        </span>
      </button>
    </>
  );
};

export default SocialLogin;
