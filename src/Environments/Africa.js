import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";

const Africa = () => {
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
