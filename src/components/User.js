import { useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>Name : {name} </h2>
            <h2>Location : Rajasthan</h2>
            <h2>Contact : @ashmita41</h2>
        </div>
    );
};

export default User;
