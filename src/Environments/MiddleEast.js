import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";

const MiddleEast = () => {
  return (
    <div className="middleEast">
      <h1>Middle East</h1>
      <EnvironmentContextProvider name="middleEast" num={3}>
        <EuclideanSequencer />
      </EnvironmentContextProvider>
    </div>
  );
};

export default MiddleEast;
