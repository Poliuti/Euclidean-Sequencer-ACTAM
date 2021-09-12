import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";

const SouthAmerica = () => {
  return (
    <div className="south-america">
      <h1>South America</h1>
      <EnvironmentContextProvider name={"southAmerica"} num={2}>
        <EuclideanSequencer />
      </EnvironmentContextProvider>
    </div>
  );
};

export default SouthAmerica;
