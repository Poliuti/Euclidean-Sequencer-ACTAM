import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="SideBar">
      <div className="home-links">
        <Link to="/environments/custom" id="Custom">
          Custom
        </Link>
        <Link to="/environments/africa" id="Africa">
          Africa
        </Link>
        <Link to="/environments/southamerica" id="South-America">
          South America
        </Link>
        <Link to="/environments/middleeast" id="Middle-East">
          Middle East
        </Link>
        <Link to="/environments/india" id="India">
          India
        </Link>
        <Link to="/environments/rest" id="rest">
          Rest of the World
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
