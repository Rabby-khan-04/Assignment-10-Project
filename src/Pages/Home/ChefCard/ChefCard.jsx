import React from "react";
import { FaRegFileAlt, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const navigate = useNavigate();
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chef;

  const handleVeiwRecipes = () => {
    navigate(`/recipes/${id}`);
  };

  return (
    <div className="keen-slider__slide overflow-hidden rounded-lg cursor-pointer relative group">
      <img
        src={chef_picture}
        className="inline-block group-hover:scale-125 transition-all duration-300 ease-in-out"
        alt=""
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 p-5 rounded-lg translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out backdrop-blur-sm text-center flex justify-center items-center flex-col">
        <h2 className="text-3xl text-primary font-semibold mb-3">
          {chef_name}
        </h2>
        <p className="text-xl mb-2">Experience: {years_of_experience} years</p>
        <div className="flex items-center gap-2 mb-1">
          <FaRegFileAlt className="text-2xl text-primary" />
          <p className="text-xl font-semibold">{number_of_recipes} Recipes</p>
        </div>
        <div className="flex items-center gap-2 text-xl mb-4">
          <FaThumbsUp className="text-primary" /> <p>{likes} likes</p>
        </div>
        <button onClick={handleVeiwRecipes} className="btn btn-primary">
          View Recipes
        </button>
      </div>
    </div>
  );
};

export default ChefCard;
