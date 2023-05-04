import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import { loadChefsDetails } from "../utilities/loader";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoutes>
            <ChefDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => loadChefsDetails(params.id),
      },
    ],
  },
]);
