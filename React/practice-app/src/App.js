
// import './App.css';
// import Header from './components/Header';
// import Content from './components/content';
// import Practice from './components/practice';
// import Session from './components/session';
// import './index.css';

// function App() {
//   return (
//     <div >
//       <Header/>
//       {/* <Content/> */}
//       {/* <Session/> */}
//       <Practice/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login"
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Home />,
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
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "profile",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;