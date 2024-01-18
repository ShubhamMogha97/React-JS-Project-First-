import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // let dummy = "dummy Data";
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(
  //   "itemCards-----------------",
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  let category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("category-----", category);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold my-6 text-2xl">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {/**category accordian */}

      {category.map((category, index) => {
        // controlled component
        return (
          <>
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index == showIndex ? true : false}
              setShowIndex={()=>setShowIndex(index)}
              
            />
          </>
        );
      })}
      {/* <RestaurantCategory/> */}
      {/* <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))} */}

      {/* <li>{itemCards && itemCards[0]?.card?.info?.name}</li> */}
      {/* <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>  */}
      {/* </ul> */}
    </div>
  );
};

export default RestaurantMenu;
