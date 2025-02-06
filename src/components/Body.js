import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    // Local State Varible - Super Powerful Variable
    const [listofRestaurents, setListofRestaurent] = useState([]);

    const [searchText, setsearchText] = useState("");
    const [filteredRestaurent, setfilteredRestaurent] = useState([]);

useEffect(() => {
    fetchData();
    },
    []);

const fetchData = async () => {
    const data = await fetch
    ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListofRestaurent(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setfilteredRestaurent(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
};

// ***Conditional Rendering*** 
// if(listofRestaurents.length === 0){
//     return <Shimmer />
// }

// Conditional Rendering using ternary operator
    return listofRestaurents.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-box" type="text" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}
                    />
                    <button onClick={() => {
                        // Filter the Restaurent Cards & Update the UI
                        // Search the text 

                    console.log(searchText);
                    const filteredRestaurent =  listofRestaurents.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredRestaurent(filteredRestaurent);
                    // We have our list of filtered restro and we just have to update out UI with the filtered Restaurents
                    // This process will be super fast because of Reconciliation process of React

                    }}
                    >Search</button>

                </div>
                <button className="filter-btn" onClick={() => {
                    //Filter Logic Here
                    const filteredList = listofRestaurents.filter(
                        (res)=> res.info.avgRating > 4
                    );
                    setListofRestaurent(filteredList);
                }}
                >Top Rated Restaurents</button>
            </div>
            <div className="restro-container">
                {filteredRestaurent.map((restaurent) => (
                    <ResCard key={restaurent.info.id} resData={restaurent} />
                   ))}
                    
           

            </div>

        </div>

    );
};

export default Body;