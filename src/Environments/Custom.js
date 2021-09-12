import EnvironmentContextProvider, { EnvironmentContext } from "../Contexts/EnvironmentContext";
import EuclideanSequencer from "../EuclideanSequencer"






const Custom = () => {
  return (
    <div className="custom">
           <h1>Custom</h1>
        <EnvironmentContextProvider name = {"custom"} num={0}>
          <EuclideanSequencer/>
        </EnvironmentContextProvider>
        
        
      
    </div>
  );
};

export default Custom;