import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container grid grid-cols-4 gap-6 py-12">
      <div className="space-y-4">
        <h2>
          <Link to="/" className="text-white font-bold text-3xl">
            Recipe<span className="text-primary">Riot</span>
          </Link>
        </h2>
        <p className="text-sm">
          Explore the best of Italian cooking with our collection of authentic
          recipes. From pasta and pizza to risotto and more, our step-by-step
          instructions make it easy to bring the taste of Italy to your table.
        </p>
        <p className="text-[#989898]">
          &copy; All Right Reserved By{" "}
          <Link to="/" className="text-primary">
            RecipeRiot
          </Link>
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <IoMdArrowDropleft className="text-2xl text-primary" />
          <h3 className="text-2xl font-bold">Contact Us</h3>
        </div>
        <div className="h-0.5 w-20 bg-primary mt-3 mb-5"></div>
        <div className="hover:text-primary">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-base" />
            <p className="text-xl">Phone</p>
          </div>
          <a href="tel:+8801111111111">+880-111-1111-111</a>
        </div>
        <div className="hover:text-primary">
          <div className="flex items-center gap-3">
            <FaRegEnvelope className="text-base" />
            <p className="text-xl">Email</p>
          </div>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <IoMdArrowDropleft className="text-2xl text-primary" />
          <h3 className="text-2xl font-bold">Quick Links</h3>
        </div>
        <div className="h-0.5 w-20 bg-primary mt-3 mb-5"></div>
        <ul className="space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <div className="flex items-center">
          <IoMdArrowDropleft className="text-2xl text-primary" />
          <h3 className="text-2xl font-bold">Social Links</h3>
        </div>
        <div className="h-0.5 w-20 bg-primary mt-3 mb-5"></div>
        <div className="flex items-center gap-4">
          <FaFacebookF className="text-xl text-white hover:text-primary" />
          <FaInstagram className="text-xl text-white hover:text-primary" />
          <FaTwitter className="text-xl text-white hover:text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
