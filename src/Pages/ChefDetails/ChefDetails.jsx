import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const { recipes, chef } = useLoaderData();
  console.log("line 6", recipes);
  console.log("line 7", chef);
  return <div>ChefDetails</div>;
};

export default ChefDetails;
