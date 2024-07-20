import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Create from "./pages/Create";
import LoginForm from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/edit",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "login",
    element: <LoginForm />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "profile",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;