import { LOGO_URL } from "../../utils/constants";

// Header component for header section: Logo, Nav Items
export const Header = () => {  // Named Export
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Contact US</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  