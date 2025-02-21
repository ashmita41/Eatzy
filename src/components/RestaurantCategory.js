import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {


    return (
        <div className="w-6/12 mx-auto my-4">
            {/* Accordion Header */}
            <div 
                className="flex justify-between items-center p-4 shadow-md bg-white rounded-lg cursor-pointer transition-all hover:shadow-lg"
                onClick={setShowIndex}
            >
                <span className="text-lg font-semibold text-gray-800">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>
                    🔽
                </span>   
            </div>

            {/* Accordion Body */}
        
                <div className="p-4 bg-gray-50 rounded-b-lg shadow-inner">
                   {showItems && <ItemList items={data.itemCards} />} 
                </div>
            </div>
    );
};

export default RestaurantCategory;
