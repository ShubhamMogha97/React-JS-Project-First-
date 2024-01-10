import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";

import { Link } from "react-router-dom";

// Header component for header section: Logo, Nav Items
export const Header = () => {
  // Named Export
  // let btnNmae = "Login";
  console.log("Body Rendered");

  const [loginBtn, setloginBtn] = useState("Login"); //Login and Logout Functionality
  // If there is  dependency array useEffect render once
  // If there is no dependency array useEffect render everytime
  // if something there in dependency array whenever state gets changed useEffect will be rendered respectively
  useEffect(() => {
    console.log("Use Effect is called");
  }, []);
  // whenever we update the state the entire component gets renrendered
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
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
