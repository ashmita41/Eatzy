import {useEffect, useState} from "react";
import { MENU_API } from "./constants";

// this hook is just a normal javascript function whose job is to take the resId and return the data which is resInfo
const useRestaurantMenu = (resId) => {
 
    const [resInfo, setResInfo] = useState(null);
    // fetch data from api

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMenu;