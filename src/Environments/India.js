import IndiaContextProvider, { IndiaContext } from "../Contexts/India/IndiaContext";
import EuclideanSequencer from "../EuclideanSequencer";

const India = () => {
  return (
    <div className="india">
       <h1>India</h1>
      <IndiaContextProvider>
        <EuclideanSequencer context={IndiaContext} />
      </IndiaContextProvider>
    </div>
  );
};

export default India;
