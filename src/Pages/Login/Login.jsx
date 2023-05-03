import React from "react";
import loginImg from "../../assets/images/login-imag.jpg";
import googleIcon from "../../assets/icons/google.svg";
import githubIcon from "../../assets/icons/github.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="py-20">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover">
            <img src={loginImg} className="brightness-50" alt="" />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-3">
              <Link to="/" className="text-black font-bold text-3xl">
                Recipe<span className="text-primary">Riot</span>
              </Link>
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
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
