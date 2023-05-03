import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToDB, getItemFromDB } from "../../../utilities/DBHandler";

const RecipesCard = ({ recipe }) => {
  const { id, name, rating, image, ingredients, cooking_method } = recipe;
  const [favourite, setFavourite] = useState(false);
  const [favouriteItem, setFavouriteItem] = useState([]);

  const handleAddToFav = (id) => {
    addToDB(id);
    const storedItem = getItemFromDB();
    setFavouriteItem(storedItem);
  };

  useEffect(() => {
    const exist = favouriteItem.find((item) => item === id);
    if (exist) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  }, [favouriteItem]);

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
          {favourite ? (
            <button disabled={favourite}>
              <FaHeart className="text-xl text-primary" />
            </button>
          ) : (
            <button onClick={() => handleAddToFav(id)}>
              <FaRegHeart className="text-xl text-primary" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
