import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    };

    return (
        <div className="w-6/12 mx-auto my-4">
            {/* Accordion Header */}
            <div 
                className="flex justify-between items-center p-4 shadow-md bg-white rounded-lg cursor-pointer transition-all hover:shadow-lg"
                onClick={handleClick}
            >
                <span className="text-lg font-semibold text-gray-800">
                    {data.title} ({data.itemCards.length})
                </span>
                <span 
                    className={`text-xl text-gray-600 transition-transform duration-300 ${showItems ? 'rotate-180' : 'rotate-0'}`}
                >
                    🔽
                </span>   
            </div>

            {/* Accordion Body */}
            <div 
                className={`transition-all duration-500 ease-in-out ${showItems ? 'block' : 'hidden'}`}
            >
                <div className="p-4 bg-gray-50 rounded-b-lg shadow-inner">
                    <ItemList items={data.itemCards} />
                </div>
            </div>
        </div>
    );
};

export default RestaurantCategory;
