import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";

const India = () => {
  const rootComponent = document.getElementById("root");
  rootComponent.classList.remove("middleEast");
  rootComponent.classList.add("india")

  return (
    <div className="india environment">
      <h1>India</h1>
      <EnvironmentContextProvider name="india" num={4}>
        <EuclideanSequencer />
      </EnvironmentContextProvider>
    </div>
  );
};

export default India;
