import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
    return (
        <div className="app">
            <h1>Hello from React 18!</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
