// Body Component for body section: It contain all restaurant cards

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import resList from "../../utils/mockdata";

// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [filteredRestaurant, setFilteredRestaurant] = useState(""); //state representing the search text of the input f

  // whenever we change local state, react get rendered component

  console.log("searchText", searchText);
  useEffect(() => {
    fetchData();
    // console.log("UseEffect called ")
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.934626&lng=77.7054388&page_type=DESKTOP_WEB_LISTING"
    ); // fetch method is given by brower
    const jsonData = await data.json();
    let checkData =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistofRestaurant(checkData);
  };
  console.log("Body rendered");

  // if(listofRestaurant.length==0){
  //   return <Shimmer/>
  // }
  // Conditional Rendering
  return listofRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            class="search-btn"
            // Filter the Restaurant and Update the UI
            // Search Functionality
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listofRestaurant.filter((res) =>
              res?.info?.name
              ?.toLowerCase()
              .includes(searchText.toLowerCase())
              );
              setlistofRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter List of Restaurant
            let data = listofRestaurant.filter((res) => res.data.avgRating > 4);
            console.log(data);
            setlistofRestaurant(data);
          }}
        >
          Top Reated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData = {restaurantList[1]}/>
        <RestaurantCard resData = {restaurantList[2]}/>
        <RestaurantCard resData = {restaurantList[3]}/>
        <RestaurantCard resData = {restaurantList[4]}/>
        <RestaurantCard resData = {restaurantList[5]}/> */}
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
