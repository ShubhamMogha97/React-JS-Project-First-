// Body Component for body section: It contain all restaurant cards

import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockdata";

// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [listofRestaurant,setlistofRestaurant]=useState(resList)
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let data = listofRestaurant.filter(
              (res) => res.data.avgRating > 4
              );
              console.log(data);
              setlistofRestaurant(data)
          }
        }
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
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
