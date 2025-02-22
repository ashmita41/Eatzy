import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 p-4 flex justify-between items-center transition-all duration-300 ease-in-out hover:shadow-xl backdrop-blur-lg bg-opacity-80 border-b border-gray-200">
      <Link to="/" className="flex items-center gap-3">
        <span className="text-4xl font-bold text-orange-600 hover:text-orange-700 transition-all duration-300 tracking-wider">
          Eatzy 🍽️
        </span>
      </Link>
      <nav>
        <ul className="hidden md:flex gap-8 text-base font-semibold items-center text-gray-600">
          <li className="flex items-center gap-1 text-gray-700">
            <span
              className={`inline-block w-3 h-3 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
              title={`Online Status: ${onlineStatus ? "Online" : "Offline"}`}
            ></span>
            <span>{onlineStatus ? "Online" : "Offline"}</span>
          </li>
          <li>
            <Link to="/" className="hover:text-orange-600 transition-colors duration-300 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-600 transition-colors duration-300 hover:underline">
              Contact
            </Link>
          </li>
          <li className="font-bold">
            <Link to="/cart" className="hover:text-orange-600 transition-colors duration-300 hover:underline">
              🛒 Cart ({cartItems.length})
            </Link>
          </li>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-transform duration-300 hover:scale-105 shadow-md"
            onClick={() => setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
          >
            {btnNameReact}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
