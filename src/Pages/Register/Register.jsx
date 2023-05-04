import React, { useContext } from "react";
import loginImg from "../../assets/images/login-imag.jpg";
import googleIcon from "../../assets/icons/google.svg";
import githubIcon from "../../assets/icons/github.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { auth, ragistration } = useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    ragistration(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="py-20">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover">
            <img
              src={loginImg}
              className="brightness-50 inline-block h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-3">
              <Link to="/" className="text-black font-bold text-3xl">
                Recipe<span className="text-primary">Riot</span>
              </Link>
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome!</p>
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
            <form onSubmit={handleRegistration}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  name="name"
                  required
                />
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
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Photo Url
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="url"
                  name="photo"
                  required
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="btn btn-primary text-black font-bold w-full"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link
                to="/login"
                className="text-sm font-semibold text-blue-500 uppercase"
              >
                or sign in
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
