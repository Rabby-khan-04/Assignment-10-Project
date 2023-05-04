import React, { useContext } from "react";
import googleIcon from "../../../assets/icons/google.svg";
import githubIcon from "../../../assets/icons/github.svg";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Aftr Login Redirection Path
  const from = location?.state?.from?.pathname;

  // Google Login Function
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Github Login Function
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center w-full mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="px-4 py-3">
          <img src={googleIcon} className="h-10" alt="" />
        </div>
        <span className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Google
        </span>
      </button>
      <button
        onClick={handleGithubLogin}
        className="flex items-center justify-center w-full mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
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
