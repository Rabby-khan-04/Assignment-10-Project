import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ChefDetails.css";
import { IoMdArrowDropleft } from "react-icons/io";
import {
  FaCalculator,
  FaCalendarAlt,
  FaRegFileAlt,
  FaThumbsUp,
} from "react-icons/fa";

const ChefDetails = () => {
  const { recipes, chef } = useLoaderData();

  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
    short_bio,
  } = chef;

  return (
    <>
      <section className="chef__banner">
        <div className="container grid grid-cols-5">
          <div className="space-y-5 col-span-3 self-center">
            <div>
              <div className="flex items-center">
                <IoMdArrowDropleft className="text-2xl text-primary" />
                <p className="text-base uppercase font-bold tracking-widest">
                  About The Chef
                </p>
              </div>
              <h2 className="text-6xl text-primary font-bold leading-tight">
                {chef_name}
              </h2>
            </div>
            <p className="text-base text-white max-w-xl">{short_bio} </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-2xl text-primary" />
                <p className="text-xl font-semibold">
                  {years_of_experience} Years of Experiences
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaRegFileAlt className="text-2xl text-primary" />
                <p className="text-xl font-semibold">
                  {number_of_recipes} Recipes
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaThumbsUp className="text-2xl text-primary" />
                <p className="text-xl font-semibold">{likes} Likes</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <img
              src={chef_picture}
              className="block rounded-lg border-2 border-primary"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChefDetails;
