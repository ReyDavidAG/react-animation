import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "../pages/error";
import Layout from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
