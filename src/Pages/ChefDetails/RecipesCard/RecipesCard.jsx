import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipesCard = ({ recipe }) => {
  const { name, rating, image, ingredients, cooking_method } = recipe;

  return (
    <div className="group border border-[#a1a1a149] p-4 rounded-lg">
      <img
        src={image}
        className="mb-7 brightness-100 group-hover:brightness-50 transition-all duration-300 rounded-t-lg border border-[#a1a1a149]"
        alt=""
      />
      <div className="">
        <h2 className="text-2xl font-bold uppercase text-white mb-5">{name}</h2>
        <p className="text-xl mb-4">
          <span className="text-primary font-semibold">Ingredients:</span>{" "}
          {ingredients.join(", ")}
        </p>
        <p className="text-xl mb-4">
          <span className="text-primary font-semibold">Cooking Method:</span>{" "}
          {cooking_method.length > 150
            ? cooking_method.slice(0, 150) + "..."
            : cooking_method}
        </p>
        <div className="flex items-center justify-between">
          <Rating
            style={{ maxWidth: 150 }}
            className="mb-4"
            value={rating}
            readOnly
          />
          <FaRegHeart className="text-xl text-primary" />
          <FaHeart className="text-xl text-primary" />
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
