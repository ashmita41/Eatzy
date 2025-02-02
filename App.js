import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <div className="header">
            <img className="logo" src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-food-logo-png-image_8466881.png" />
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};
const Msn = () => {
    return (
        <div className="header">
           <h1>loremm ipsum
           </h1>
        </div>
    );
};

const AppLayout = () => {
    return (
       
        <div className="app">
             <Title />
             <Msn />
            <h1>Hello from React 18!</h1>
        
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
