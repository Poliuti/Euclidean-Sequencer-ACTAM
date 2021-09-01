import ColorContextProvider from "../Contexts/ColorContext";
import CustomContextProvider, { CustomContext } from "../Contexts/Custom/CustomContext";
import EuclideanSequencer from "../EuclideanSequencer"
import CircleContainer from "./../CircleContainer";





const Custom = () => {
  return (
    <div className="custom">
           <h1>Custom</h1>
        <CustomContextProvider >
          <EuclideanSequencer context={CustomContext}/>
        </CustomContextProvider>
        
        
      
    </div>
  );
};

export default Custom;