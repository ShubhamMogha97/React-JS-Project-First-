// Body Component for body section: It contain all restaurant cards

import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockdata";

// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {/* <RestaurantCard resData = {restaurantList[1]}/>
        <RestaurantCard resData = {restaurantList[2]}/>
        <RestaurantCard resData = {restaurantList[3]}/>
        <RestaurantCard resData = {restaurantList[4]}/>
        <RestaurantCard resData = {restaurantList[5]}/> */}
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;