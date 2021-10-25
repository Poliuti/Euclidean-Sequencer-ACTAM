import { Link } from "react-router-dom";

const SideBar = ({basePath}) => {
  
  return (
    <nav className="SideBar">
      <div className="home-links">
        <Link to={`${basePath}`} id="Custom">
          Custom
        </Link>
        <Link to={`${basePath}/africa`} id="Africa">
          Africa
        </Link>
        <Link to={`${basePath}/latinamerica`} id="Latin-America">
          Latin America
        </Link>
        <Link to={`${basePath}/europe`} id="Europe">
          Europe
        </Link>
        <Link to={`${basePath}/asia`} id="Asia">
          Asia
        </Link>
        
      </div>
    </nav>
  );
};

export default SideBar;
