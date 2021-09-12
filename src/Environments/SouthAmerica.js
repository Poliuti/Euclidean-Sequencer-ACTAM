import EnvironmentContextProvider, { EnvironmentContext } from "../Contexts/EnvironmentContext";
import EuclideanSequencer from "../EuclideanSequencer";

const SouthAmerica = () => {
  return (
    <div className="south-america">
    <h1>South America</h1>
      <EnvironmentContextProvider name={"southAmerica"} num={2}>
        <EuclideanSequencer  />
      </EnvironmentContextProvider>
    </div>
  );
};

export default SouthAmerica;