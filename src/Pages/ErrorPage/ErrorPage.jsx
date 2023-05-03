import React from "react";
import dog from "../../assets/images/dog_in_vacation.jpg";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error, error.status);

  return (
    <section>
      <div className="container flex flex-col justify-center items-center h-screen text-center space-y-4">
        <h2 className="text-4xl font-bold text-primary uppercase">Whoops!</h2>
        <p className="text-2xl font-semibold">
          <span className="text-primary ">{error.status}</span>{" "}
          {error.statusText}
        </p>
        <img src={dog} alt="" />
        <p className="text-2xl font-semibold">
          Looks like this page went on vacation
        </p>
        <p className="text-xl font-semibold">
          Try our{" "}
          <Link className="text-primary" to="/">
            homepage
          </Link>{" "}
          or{" "}
          <Link className="text-primary" to="/blog">
            blog
          </Link>{" "}
          instead
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
