import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CardDetails from "../pages/CardDetails";
import Home from "../pages/Home";
import ErrorPage from "../pages/shared/ErrorPage";
import PostCard from "../pages/PostCard/PostCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/cards/:title",
        element: <CardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cards/${params.title}`),
      },
      { path: "/postCard", element: <PostCard /> },
    ],
  },
]);
