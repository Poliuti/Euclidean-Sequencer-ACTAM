import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 style={{fontSize : "2rem"}}>Sorry</h1>
      <h1 style={{fontSize : "2rem"}}>That page cannot be found</h1>
      <Link to="/" style={{fontSize : "2rem"}}>Back to the HomePage..</Link>
    </div>
  );
};

export default NotFound;
