import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";

const India = () => {
  return (
    <div className="india">
      <h1>India</h1>
      <EnvironmentContextProvider name="india" num={4}>
        <EuclideanSequencer />
      </EnvironmentContextProvider>
    </div>
  );
};

export default India;
