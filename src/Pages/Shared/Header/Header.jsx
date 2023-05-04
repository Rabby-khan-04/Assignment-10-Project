import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="navbar container py-4">
      <div className="navbar-start">
        <Link to="/" className="text-white font-bold text-3xl">
          Recipe<span className="text-primary">Riot</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "active" : "") + " menu__item"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "active" : "") + " menu__item"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <div>
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              className="h-10 w-10 rounded-full"
              data-tooltip-id="user__name__tooltip"
              data-tooltip-content={user?.displayName}
              data-tooltip-place="top"
              alt=""
            />
          ) : (
            <FaUserCircle className="text-4xl" />
          )}
        </div>

        <div className="hidden lg:block">
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <button onClick={goToLoginPage} className="btn btn-primary">
              Login Now
            </button>
          )}
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul className="menu-compact space-y-4 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "active" : "") + " menu__item"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                (isActive ? "active" : "") + " menu__item"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            {user ? (
              <button onClick={handleLogout} className="btn btn-primary w-full">
                Logout
              </button>
            ) : (
              <button
                onClick={goToLoginPage}
                className="btn btn-primary w-full"
              >
                Login Now
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
