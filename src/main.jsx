import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import GadgetsCard from "./components/GadgetsCard";
import GadgetDetails from "./components/GadgetDetails";
import Review from "./components/Review";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/",
            element: <GadgetsCard></GadgetsCard>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetsCard></GadgetsCard>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
