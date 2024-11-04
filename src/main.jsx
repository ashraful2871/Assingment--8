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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
