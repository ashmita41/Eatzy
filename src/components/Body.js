import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData"


const Body = () => {
    const [listofRestaurents, setListofRestaurent] = useState(resList);

//     Normal Js Variable

    return (
        <div className="body">
            <div className="filter">
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
                {listofRestaurents.map((restaurent) => (
                    <ResCard key={restaurent.info.id} resData={restaurent} />
                   ))}
                    
           

            </div>

        </div>

    );
};

export default Body;