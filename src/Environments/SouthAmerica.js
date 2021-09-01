import SouthAmericaContextProvider, { SouthAmericaContext } from "../Contexts/SouthAmerica/SouthAmericaContext";
import EuclideanSequencer from "../EuclideanSequencer";

const SouthAmerica = () => {
  return (
    <div className="south-america">
    <h1>South America</h1>
      <SouthAmericaContextProvider>
        <EuclideanSequencer context={SouthAmericaContext} />
      </SouthAmericaContextProvider>
    </div>
  );
};

export default SouthAmerica;