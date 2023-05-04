import React from "react";
import mealImg1 from "../../../assets/images/mm_1.jpg";
import mealImg2 from "../../../assets/images/mm_2.jpg";
import mealImg3 from "../../../assets/images/mm_3.jpg";
import mealImg4 from "../../../assets/images/mm_4.jpg";
import mealImg5 from "../../../assets/images/mm_5.jpg";
import mealImg6 from "../../../assets/images/mm_6.jpg";
import mealImg7 from "../../../assets/images/mm_7.jpg";
import mealImg8 from "../../../assets/images/mm_8.jpg";
import mealImg9 from "../../../assets/images/mm_9.jpg";
import mealImg10 from "../../../assets/images/mm_10.jpg";
import mealImg11 from "../../../assets/images/mm_11.jpg";
import mealImg12 from "../../../assets/images/mm_12.jpg";

const MealOfMounth = () => {
  const mealsImages = [
    mealImg1,
    mealImg2,
    mealImg3,
    mealImg4,
    mealImg5,
    mealImg6,
    mealImg7,
    mealImg8,
    mealImg9,
    mealImg10,
    mealImg11,
    mealImg12,
  ];

  return (
    <div className="grid grid-cols-4 gap-7 pt-12">
      {mealsImages.map((img, index) => (
        <img
          src={img}
          alt=""
          key={index}
          className="brightness-100 hover:brightness-50 duration-300"
        />
      ))}
    </div>
  );
};

export default MealOfMounth;
