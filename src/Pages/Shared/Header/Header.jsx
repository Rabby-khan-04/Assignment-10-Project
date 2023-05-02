import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
      <div className="navbar-end">
        <div className="hidden lg:block">
          <a className="btn btn-primary">Login Now</a>
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
            <NavLink className="btn btn-primary block" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
