import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/userContext";

// Restaurant Card Component
const RestaurantCard = (props) => {
  const { resData } = props; // Destructuring 
  // console.log(resData?.info?.cloudinaryImageId)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;
  const{loggedUser} = useContext(UserContext)

  return (
    <div className="m-4 p-4 w-[200px] transition-transform transform bg-gray-100 shadow-lg rounded-md hover:scale-105" >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="break-words">{cuisines.join(",")}</h4>
      <h4 className="font-bold py-4 text-sm">{avgRating} stars . {sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
      {/* <h4 className="font-bold py-4 text-sm">{loggedUser}</h4> */} 
    </div>
  );
};

export const withPromtedlables=(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label>Promted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  }
}

export default RestaurantCard;
