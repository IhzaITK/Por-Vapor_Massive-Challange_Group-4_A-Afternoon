import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import Login from "./pages/Login.jsx";
import "./index.css";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Product1 from "./pages/Product1Page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Backend from "./pages/Backend.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import Order from "./pages/Order.jsx";
import DetailProduct1 from "./pages/DetailProduct1.jsx";
import Add from "./pages/Add.jsx";
import UpdateProduct from "./pages/Update.jsx"; // Ensure this name matches the export

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "app",
    element: <App />,
  },
  {
    path: "cartpage",
    element: <CartPage />,
  },
  {
    path: "checkout",
    element: <CheckoutPage />,
  },
  {
    path: "product1",
    element: <Product1 />,
  },
  {
    path: "forget",
    element: <ForgetPassword />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "change",
    element: <ChangePassword />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "detail/:id",
    element: <DetailProduct1 />,
  },
  {
    path: "backend",
    element: <Backend />,
  },
  {
    path: "add",
    element: <Add />,
  },
  {
    path: "update/:id", // Ensure the path is correct
    element: <UpdateProduct />, // Ensure the component is correctly referenced
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
