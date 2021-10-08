import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="SideBar">
      <div className="home-links">
        <Link to="/" id="Custom">
          Custom
        </Link>
        <Link to="/africa" id="Africa">
          Africa
        </Link>
        <Link to="/latinamerica" id="Latin-America">
          Latin America
        </Link>
        <Link to="/europe" id="Europe">
          Europe
        </Link>
        <Link to="/asia" id="Asia">
          Asia
        </Link>
        
      </div>
    </nav>
  );
};

export default SideBar;
