import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="title-header" style={{fontSize: "2rem"}}>The Euclidean Sequencer</h1>
      <div className="links">
        <Link to="/environments/custom">Home</Link>
        <Link
          to="/about"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
