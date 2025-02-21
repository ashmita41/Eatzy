import React, { useEffect, useState } from "react"; 
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";  
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Define the AppLayout component
const AppLayout = () => {
    const[userName, setUserName] = useState();

    //authentication
    useEffect(() => {
    //Make an API call and send username and password
    const data = {
        name: "Ashmita Pandey",
    };
    setUserName(data.name);
}, []);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName}}>
             <div className="app">
            <Header />
           <Outlet />

        </div>
        </UserContext.Provider>
        </Provider>
        
       
    );
};

// Define the router using createBrowserRouter
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            
        ],
        errorElement: <Error />,
    },
]);

// Render the app using RouterProvider with the router configuration
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




