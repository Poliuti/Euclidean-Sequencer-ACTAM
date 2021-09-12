import { Destination } from "tone";
import MacroVolume from "./MacroVolume";
import EffectsControls from "./EffectsControls";

const MacroControls = () => {
    return ( <div className="macro-controls">
        <MacroVolume />
        <EffectsControls destination = {Destination} />
       
    </div> );
}
 
export default MacroControls;
