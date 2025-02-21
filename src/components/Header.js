import { LOGO_URL } from "../utils/constants";
import {useState, useContext} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    // console.log("Header Rendered!");

//     useEffect( () => {
//         console.log("useEffect Called!")
//     },
// [btnNameReact]);
const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);

    return (
<div className="flex justify-between bg-amber-100 shadow-lg">
<img className="w-56 h-30 mix-blend-multiply " src={LOGO_URL} />
            <div className="flex items-center">
            <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                <li className="px-4"> <Link to={"/"}>Home</Link></li>
                <li className="px-4"> <Link to={"/about"}>About Us</Link></li>
                <li className="px-4"> <Link to={"contact"}>Contact</Link></li>
                <li className="px-4">Cart</li>
                <button className="login" 
                onClick={() => {
                    btnNameReact === "Login" 
                    ? setbtnNameReact("Logout") 
                    : setbtnNameReact("Login");
                    }}>
                        {btnNameReact}
                    </button>
                    <li className="px-4">{loggedInUser}</li>
            </ul>
            </div>
            
        </div>
    )
};

export default Header;