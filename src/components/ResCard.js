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
    <div className="relative m-4 p-4 w-64 rounded-lg bg-gray-50 hover:bg-gray-200 shadow-lg">
      <div className="relative">
        <img
          className="rounded-lg w-full h-40 object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-yellow-600 font-semibold">{avgRating} ⭐</h4>
      <h4 className="text-gray-800">{costForTwo}</h4>
      <h4 className="text-gray-500">{sla?.deliveryTime} minutes</h4>
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

    
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
            Veg
          </span>
    
      </div>
    );
  };
};

export default ResCard;
