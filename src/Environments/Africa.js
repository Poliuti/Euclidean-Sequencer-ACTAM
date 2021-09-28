import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";
import useFetchGet from "../useFetchGet";

const Africa = () => {
  /* const nome = "africa"

  let {data} = useFetchGet(`http://localhost:8000/defaultLines?id=0.africa`); */

  
  return (
    <div className="africa">
      <h1>Africa</h1>
      <EnvironmentContextProvider name={"africa"} num={1}>
        <EuclideanSequencer />
      </EnvironmentContextProvider>
    </div>
  );
};

export default Africa;
