import SideBar from "./SideBar";
import useFetch from "./useFetch";
import HomeContent from "./HomeContent";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="Home">
      <SideBar />
      
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <HomeContent />}
    </div>
  );
};

export default Home;
