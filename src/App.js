import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";



/*
- Header
    -Logo
    -Nav Items
-Body
    -Search
    -Restaurent Container
        -Img
        -Name of Res, Star Rating, Cuisines, etc
-Footer
    -Container
    -Links
    -Address
    -Contact
*/








const AppLayout = () => {
    return (
       
        <div className="app">
             <Header />
             <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
