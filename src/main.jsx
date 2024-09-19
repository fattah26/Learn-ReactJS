import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login'
import RegisterPage from './pages/register';
import ErrorPage from "./pages/notFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>hello world</div>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    // {
    //     path: "/error",
    //     element: <ErrorPage/>
    // }
])
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );