import React from "react"; 
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";  // Correct import
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

// Define the AppLayout component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

// Define the router using createBrowserRouter
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

// Render the app using RouterProvider with the router configuration
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
