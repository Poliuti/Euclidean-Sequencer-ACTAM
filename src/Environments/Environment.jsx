import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";

const Environment = ({ envName, num, envNamePath }) => {
  return (
    <div className="environment">
      <h1>{envName}</h1>
      <EnvironmentContextProvider name={envNamePath} num={num}>
        <EuclideanSequencer />
      </EnvironmentContextProvider>
    </div>
  );
};

export default Environment;
