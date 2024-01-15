import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../../utils/useOnlineStatus";

// Header component for header section: Logo, Nav Items
export const Header = () => {
  // Named Export
  // let btnNmae = "Login";
  // console.log("Body Rendered");

  const [loginBtn, setloginBtn] = useState("Login"); //Login and Logout Functionality
  const onlineStatus= UseOnlineStatus()
  // If there is  dependency array useEffect render once
  // If there is no dependency array useEffect render everytime
  // if something there in dependency array whenever state gets changed useEffect will be rendered respectively
  useEffect(() => {
    // console.log("Use Effect is called");
  }, []);
  // whenever we update the state the entire component gets renrendered
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg px">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢":"🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setloginBtn("Logout") // conditional Rendering
                : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
