import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const recipes = useLoaderData();
  console.log(recipes);
  return <div>ChefDetails</div>;
};

export default ChefDetails;
