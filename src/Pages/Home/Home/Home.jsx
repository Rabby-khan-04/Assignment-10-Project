import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const Home = () => {
  const chefs = useLoaderData();

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

  return (
    <>
      {/*     Header Section Starts
       */}
      <section className="banner__section">
        <div className="container">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-6xl text-white font-bold leading-tight">
              Experience the Joy of{" "}
              <span className="text-primary">Italian Cuisine:</span> Start
              Cooking Today
            </h2>
            <p className="text-base text-white max-w-xl">
              Discover authentic Italian flavors with our collection of
              delicious recipes. From pasta to pizza, our easy-to-follow
              instructions will help you create mouth-watering meals in no time.
              Buon appetito!
            </p>
            <button className="btn btn-primary">Login Now</button>
          </div>
        </div>
      </section>
      {/*     Header Section Ends
       */}

      {/* Chefs Sections Start */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-4xl font-bold uppercase">Our best chef</h2>
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
          <div ref={sliderRef} className="keen-slider pt-12">
            {chefs.map((chef) => (
              <ChefCard chef={chef} key={chef.id} />
            ))}
          </div>
        </div>
      </section>
      {/* Chefs Sections Ends */}
    </>
  );
};

export default Home;
