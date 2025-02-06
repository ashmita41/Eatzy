import { LOGO_URL } from "../utils/constants";
import {useState, useSTate} from "react";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");

    return (
        <div className="header">
            <img className="logo" src={LOGO_URL} />
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" 
                onClick={() => {
                    btnNameReact === "Login" 
                    ? setbtnNameReact("Logout") 
                    : setbtnNameReact("Login");
                    }}>
                        {btnNameReact}
                    </button>
            </ul>
            </div>
            
        </div>
    )
};

export default Header;