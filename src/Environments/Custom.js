import CustomContextProvider from "../Contexts/Custom/CustomContext";
import EuclideanSequencer from "../EuclideanSequencer"




const Custom = () => {
  return (
    <div className="custom">
        <CustomContextProvider>
            <EuclideanSequencer/>
        </CustomContextProvider>
      
    </div>
  );
};

export default Custom;