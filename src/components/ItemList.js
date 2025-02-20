import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div className="space-y-4">
            {items.map((item) => (
                <div 
                    key={item.card.info.id} 
                    className="relative flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                    {/* Item Details */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h2>
                            <span className="text-green-600 font-bold">
                                ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">{item.card.info.description}</p>
                    </div>

                    {/* Image Container with Overlay Button */}
                    <div className="relative">
                        <img 
                            src={CDN_URL + item.card.info.imageId} 
                            className="w-24 h-24 object-cover rounded-lg ml-4" 
                            alt={item.card.info.name}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg"></div>
                        
                        {/* Overlay Button */}
                        <button 
                            className="absolute bottom-2 right-2 bg-green-500 text-white text-sm font-semibold py-1 px-3 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
                        >
                            Add +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
