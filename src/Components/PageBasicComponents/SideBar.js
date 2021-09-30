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
        <Link to="/southamerica" id="South-America">
          South America
        </Link>
        <Link to="/middleeast" id="Middle-East">
          Middle East
        </Link>
        <Link to="/india" id="India">
          India
        </Link>
        <Link to="/restOfTheWorld" id="rest">
          Rest of the World
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
