import { CDN_URL } from "../../utils/constants";

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

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
