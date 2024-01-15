// Body Component for body section: It contain all restaurant cards

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../../utils/useOnlineStatus";
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
    // console.log("JSON DATA 1--------",jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    let checkData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("checkData", checkData);
    setlistofRestaurant(checkData);
  };
  console.log("Body rendered");

  // if(listofRestaurant.length==0){
  //   return <Shimmer/>
  // }
  // Conditional Rendering

const onlineStatus=UseOnlineStatus()

if(onlineStatus===false) return <h1>Opps, You are not online please check your internet connection</h1>


  return listofRestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="search p-4 m-4 flex items-center">
        <button 
          className="px-4 py-2 bg-gray-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {/* <RestaurantCard resData = {restaurantList[1]}/>
        <RestaurantCard resData = {restaurantList[2]}/>
        <RestaurantCard resData = {restaurantList[3]}/>
        <RestaurantCard resData = {restaurantList[4]}/>
        <RestaurantCard resData = {restaurantList[5]}/> */}
        {listofRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
