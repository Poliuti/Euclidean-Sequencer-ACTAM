import AfricaContextProvider, { AfricaContext } from "../Contexts/Africa/AfricaContext";
import EuclideanSequencer from "../EuclideanSequencer";

const Africa = () => {
    return ( <div className="africa">
       <h1>Africa</h1>
        <AfricaContextProvider >
          <EuclideanSequencer context={AfricaContext}/>
        </AfricaContextProvider>
    </div> );
}
 
export default Africa;
