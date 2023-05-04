import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import "./ChefDetails.css";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaCalendarAlt, FaRegFileAlt, FaThumbsUp } from "react-icons/fa";
import RecipesCard from "./RecipesCard/RecipesCard";
import Spinner from "../Shared/Spinner/Spinner";
import LazyLoad from "react-lazy-load";

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
    navigate("/");
  };

  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === "loading") {
    console.log("From Loader", navigation.state);
    return <Spinner />;
  }

  return (
    <>
      <section className="chef__banner">
        <div className="container grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="space-y-5 md:col-span-1 lg:col-span-3 self-center">
            <div>
              <div className="flex items-center">
                <IoMdArrowDropleft className="text-2xl text-primary" />
                <p className="text-base uppercase font-bold tracking-widest">
                  About The Chef
                </p>
              </div>
              <h2 className="text-4xl lg:text-6xl text-primary font-bold leading-tight">
                {chef_name}
              </h2>
            </div>
            <p className="text-base text-white max-w-xl">{short_bio} </p>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
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
          <div className="row-start-1 md:row-start-auto md:col-span-1 lg:col-span-2 self-center">
            <LazyLoad>
              <img
                src={chef_picture}
                className="block rounded-lg border-2 border-primary"
                alt=""
              />
            </LazyLoad>
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
          <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
