import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";

const MiddleEast = () => {
  const rootComponent = document.getElementById("root");
  rootComponent.classList.remove("india");
  rootComponent.classList.add("middleEast")
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
