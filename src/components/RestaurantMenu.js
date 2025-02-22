import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center mx-auto mt-16 p-6 w-full sm:w-11/12 md:w-9/12 bg-white rounded-lg shadow-lg border border-gray-200">
            <h1 className="font-bold my-5 text-3xl text-gray-900">{name}</h1>
            <p className="font-medium text-lg text-gray-700">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            
            <div className="mt-10 space-y-6">
                {categories.map((category, index) => (
                    <RestaurantCategory 
                        key={category?.card?.card.title} 
                        data={category?.card?.card} 
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index === showIndex ? -1 : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
