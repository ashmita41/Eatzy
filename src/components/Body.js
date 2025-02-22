import ResCard, { withLabel } from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurents, setListofRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const ResCardLabel = withLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await data.json();
    setListofRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1 className="text-center text-red-500 font-semibold">Looks like you're offline, please check your internet connection</h1>;

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-50 p-6 min-h-screen flex flex-col items-center mt-20">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-1/2 shadow-sm"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 shadow-md transition-all"
            onClick={() => {
              const filtered = listofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filtered);
            }}
          >
            Search
          </button>
          <button
            className="px-6 py-2 bg-orange-700 text-white rounded-lg hover:bg-orange-800 shadow-md transition-all whitespace-nowrap"
            onClick={() => {
              const filteredList = listofRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurent(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant List */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurent.map((restaurent) => (
          <Link key={restaurent.info.id} to={`/restaurants/${restaurent.info.id}`} className="transform transition duration-300 hover:scale-105">
            {restaurent.info.veg ? <ResCardLabel resData={restaurent} /> : <ResCard resData={restaurent} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
