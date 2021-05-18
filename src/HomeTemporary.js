import BlogList from "./BlogList";
import SideBar from "./SideBar";

import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      <SideBar />
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
    
  );
}
 
//export default Home;