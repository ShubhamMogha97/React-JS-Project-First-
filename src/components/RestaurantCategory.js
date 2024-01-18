import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItems ,setShowIndex,dummy}) => {
  console.log("data-------", data);
  // const [showItems, setShowItems] = useState(false);
  const [arrow, setarrow] = useState("🔽");
  //controlled component, parent controling its state

  // console.log("data-----", data);

  const handleClick = () => {
    setShowIndex();
    // setShowItems(!showItems);
    arrow == "🔽" ? setarrow("🔼") : setarrow("🔽");
  };

  return (
    <div>
      {/* <h1>Hello Restaurant category</h1> */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>{arrow}</span>
        </div>
        {/* Inline condition in React  */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
