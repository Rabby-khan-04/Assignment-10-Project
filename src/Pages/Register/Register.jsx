import React, { useContext, useState } from "react";
import loginImg from "../../assets/images/login-imag.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const { auth, ragistration } = useContext(AuthContext);

  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // Email Password Registration Function
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    setErrorMsg(null);
    setSuccessMsg(null);

    if (password.length < 6) {
      setErrorMsg("Password Must Be More Then 6 Chrecter");
      return;
    } else if (email === "" || password === "") {
      setErrorMsg("Must Fill Email & Password Field");
      return;
    }

    ragistration(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccessMsg("User Created Sucessfully");
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
        setErrorMsg(error.message);
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
            <form onSubmit={handleRegistration}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  name="name"
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
