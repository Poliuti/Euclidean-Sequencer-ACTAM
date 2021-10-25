import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";


const Environment = ({ envName, num, envNamePath, userPresets, setUserPresets }) => {
 
  
  return (

    <div className="environment">
      <h1 className="env-header" >{envName}</h1>
      <EnvironmentContextProvider name={envNamePath} num={num}>
        <EuclideanSequencer userPresets={userPresets} setUserPresets={setUserPresets}/>
      </EnvironmentContextProvider>
    </div>
  );
};

export default Environment;
