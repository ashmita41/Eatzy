import ResCard, { withLabel } from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurents, setListofRestaurent] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);

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
    setfilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks like you're offline, please check your internet connection</h1>;

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-white">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black px-2 py-1 rounded-lg"
            type="text"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg ml-2 hover:bg-green-700"
            onClick={() => {
              const filtered = listofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurent(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center rounded-lg">
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = listofRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurent(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurent.map((restaurent) => (
          <Link key={restaurent.info.id} to={"/restaurants/" + restaurent.info.id}
          >
        {/*If the restaurant is veg only then add that      label to it */
            restaurent.info.veg ? <ResCardLabel resData={restaurent} /> : <ResCard resData={restaurent} />
        }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
