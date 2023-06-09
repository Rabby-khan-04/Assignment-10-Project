import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Spinner from "../../Shared/Spinner/Spinner";
import MealOfMounth from "../MealOfMounth/MealOfMounth";

const Home = () => {
  const chefs = useLoaderData();

  // Chefs Card Slider Function
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      interval: 5000,
      breakpoints: {
        "(min-width: 576px)": {
          slides: { perView: 2, spacing: 15 },
        },
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 15 },
        },
        "(min-width: 1280px)": {
          slides: { perView: 4, spacing: 15 },
        },
      },
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const navigation = useNavigation();

  // Loading State Condition
  if (navigation.state === "loading") {
    return <Spinner />;
  }

  return (
    <>
      {/*     Header Section Starts
       */}
      <section className="banner__section">
        <div className="container">
          <div className="max-w-3xl space-y-5 text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-6xl text-white font-bold leading-tight">
              Experience the Joy of{" "}
              <span className="text-primary">Italian Cuisine:</span> Start
              Cooking Today
            </h2>
            <p className="text-base text-white max-w-xl mx-auto lg:mx-0">
              Discover authentic Italian flavors with our collection of
              delicious recipes. From pasta to pizza, our easy-to-follow
              instructions will help you create mouth-watering meals in no time.
              Buon appetito!
            </p>
            <button className="btn btn-primary text-xl font-bold">
              View Recipes
            </button>
          </div>
        </div>
      </section>
      {/*     Header Section Ends
       */}

      {/* Chefs Sections Start */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl font-bold uppercase">Our best chefs</h2>
            <div className="h-0.5 w-20 bg-primary my-5 mx-auto"></div>
            <p className="max-w-3xl text-base mx-auto">
              Meet our best Italian chefs! Discover the culinary talents behind
              our delicious recipes and learn about their backgrounds, cooking
              philosophies, and signature dishes. From Michelin-starred chefs to
              up-and-coming talent, our selection showcases the best of Italian
              cooking. Get inspired by their unique approaches to traditional
              recipes and find new ideas for your own culinary adventures.
            </p>
          </div>
          <div ref={sliderRef} className="keen-slider pt-16">
            {chefs.map((chef) => (
              <ChefCard chef={chef} key={chef.id} />
            ))}
          </div>
        </div>
      </section>
      {/* Chefs Sections Ends */}

      {/* Special Offer Section Starts */}
      <section className="offer__section">
        <div className="offer_top"></div>
        <div className="container py-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-5">
              <h3 className="text-xl text-primary font-medium uppercase">
                Special Offer
              </h3>
              <div className="h-0.5 w-20 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl uppercase font-bold leading-tight mb-5">
              Buy our recipe book now and receive a generous{" "}
              <span className="text-primary">30% discount</span> today!
            </h2>
            <button className="btn btn-primary text-xl font-bold">
              Buy Now
            </button>
          </div>
        </div>
        <div className="offer_bottom"></div>
      </section>
      {/* Special Offer Section Ends */}

      {/* Meal Of the Mounth Section Starts */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold">
              Share Your Meals on Instagram with{" "}
              <span className="text-primary">#rioReview</span> & We Will Reward
              the <span className="text-primary">Meal of the Month!</span>
            </h2>
          </div>
          <MealOfMounth />
        </div>
      </section>
      {/* Meal Of the Mounth Section Ends */}
    </>
  );
};

export default Home;
