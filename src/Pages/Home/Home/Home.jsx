import React from "react";

const Home = () => {
  return (
    <>
      {/*     Header Section Starts
       */}
      <section className="banner__section">
        <div className="container">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-6xl text-white font-bold leading-tight">
              Experience the Joy of{" "}
              <span className="text-primary">Italian Cuisine</span>: Start
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
    </>
  );
};

export default Home;
