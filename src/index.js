import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MenuBar from "./pages/menuBar";
import Products from "./pages/products";
import Accounts from "./pages/accounts";
import App from "./App";
import Login from "./pages/Login";
const AppLayout = () => {
  return(
    <div>
      <MenuBar/>
      <App/>
    </div>
  )

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,


  },
  {
    path: "accounts",
    element: <div><Accounts/></div>,
  },
  {
    path: "products",
    element: <div><Products/></div>,
  },
  {
    path: "login",
    element: <div><Login/></div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);