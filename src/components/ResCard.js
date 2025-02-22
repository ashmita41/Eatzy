import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla
  } = resData?.info;

  return (
    <div className="relative m-4 p-4 w-72 rounded-xl bg-white shadow-md transform transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="rounded-xl w-full h-44 object-cover transition-all duration-300 hover:scale-110"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="py-3">
        <h3 className="font-bold text-xl text-gray-800 truncate">{name}</h3>
        <h4 className="text-gray-500 text-sm truncate">{cuisines.join(", ")}</h4>
        <div className="flex justify-between items-center mt-2">
          <span className="text-yellow-600 font-semibold text-lg">{avgRating} ⭐</span>
          <span className="text-gray-700 font-medium">{costForTwo}</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">⏳ {sla?.deliveryTime} min</p>
      </div>
    </div>
  );
};

// Higher Order Component to add Labels
export const withLabel = (ResCard) => {
  return (props) => {
    const { resData } = props;
    return (
      <div className="relative">
        <ResCard {...props} />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
          Veg
        </span>
      </div>
    );
  };
};

export default ResCard;
