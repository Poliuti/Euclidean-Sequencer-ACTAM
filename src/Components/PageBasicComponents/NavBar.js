

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="title-header" style={{ fontSize: "2rem" }}>
        The Euclidean Sequencer
      </h1>
      <div className="links">
        
        <a rel="noopener noreferrer" style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }} href="https://github.com/Poliuti/Euclidean-Sequencer-ACTAM/blob/main/README.md" target="_blank">About</a>
        
      </div>
    </nav>
  );
};

export default Navbar;
