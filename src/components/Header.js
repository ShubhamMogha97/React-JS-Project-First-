import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

// Header component for header section: Logo, Nav Items
export const Header = () => {
  // Named Export
  // let btnNmae = "Login";

  const [loginBtn, setloginBtn] = useState("Login"); //Login and Logout Functionality
  // whenever we update the state the entire component gets renrendered
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
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
