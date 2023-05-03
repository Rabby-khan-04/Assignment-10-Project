import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import { loadChefsDetails } from "../utilities/loader";
import Spinner from "../Pages/Shared/Spinner/Spinner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/chefs"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/recipes/:id",
        element: <ChefDetails />,
        loader: ({ params }) => loadChefsDetails(params.id),
      },
      {
        path: "spinner",
        element: <Spinner />,
      },
    ],
  },
]);
