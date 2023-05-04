import React, { useContext, useState } from "react";
import loginImg from "../../assets/images/login-imag.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname;

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setErrorMsg(null);
        setSuccessMsg("Logged In Sucessfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setSuccessMsg(null);
        setErrorMsg(
          error.message === "Firebase: Error (auth/user-not-found)."
            ? "Invalid user name and password"
            : error.message
        );
      });
  };

  return (
    <>
      <div className="py-20">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover">
            <img
              src={loginImg}
              className="brightness-50 h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-3">
              <Link to="/" className="text-black font-bold text-3xl">
                Recipe<span className="text-primary">Riot</span>
              </Link>
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <div>
              <SocialLogin />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <a href="#" className="text-xs text-gray-500">
                    Forget Password?
                  </a>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="btn btn-primary text-black font-bold w-full"
                >
                  Login
                </button>
              </div>
            </form>
            {successMsg ? (
              <div className="mt-4">
                <p
                  className={`text-base ${
                    errorMsg ? "text-error" : successMsg ? "text-success" : ""
                  } font-semibold`}
                >
                  {errorMsg ? errorMsg : successMsg ? successMsg : ""}
                </p>
              </div>
            ) : errorMsg ? (
              <div className="mt-4">
                <p
                  className={`text-base capitalize ${
                    errorMsg ? "text-error" : successMsg ? "text-success" : ""
                  } font-semibold`}
                >
                  {errorMsg ? errorMsg : successMsg ? successMsg : ""}
                </p>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link
                to="/register"
                className="text-sm font-semibold text-blue-500 uppercase"
              >
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
