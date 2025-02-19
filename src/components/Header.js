import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    // console.log("Header Rendered!");

//     useEffect( () => {
//         console.log("useEffect Called!")
//     },
// [btnNameReact]);
const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <img className="logo" src={LOGO_URL} />
            <div className="nav-items">
            <ul>
                <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                <li> <Link to={"/"}>Home</Link></li>
                <li> <Link to={"/about"}>About Us</Link></li>
                <li> <Link to={"contact"}>Contact</Link></li>
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