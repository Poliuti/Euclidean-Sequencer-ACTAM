import MiddleEastContextProvider, { MiddleEastContext } from "../Contexts/MiddleEast/MiddleEastContext";
import EuclideanSequencer from "../EuclideanSequencer";

const MiddleEast = () => {
  return (
    <div className="middleEast">
    <h1>Middle East</h1>
      <MiddleEastContextProvider>
        <EuclideanSequencer context={MiddleEastContext} />
      </MiddleEastContextProvider>
    </div>
  );
};

export default MiddleEast;