import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./ChefDetails.css";
import { IoMdArrowDropleft } from "react-icons/io";
import {
  FaCalculator,
  FaCalendarAlt,
  FaRegFileAlt,
  FaThumbsUp,
} from "react-icons/fa";
import RecipesCard from "./RecipesCard/RecipesCard";

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

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(-1);
  };

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
            <button
              onClick={handleNavigation}
              className="btn btn-primary text-base"
            >
              Back To Home
            </button>
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
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl font-bold uppercase">
              Most Populer Recipes
            </h2>
            <div className="h-0.5 w-20 bg-primary my-5 mx-auto"></div>
          </div>
          <div className="pt-12 grid grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipesCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChefDetails;
