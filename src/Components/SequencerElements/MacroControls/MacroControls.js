import { Destination } from "tone";
import MacroVolume from "./MacroVolume";
import EffectsControls from "./EffectsControls";

const MacroControls = ({color}) => {
    
    return ( <div id="macro-controls">
        <MacroVolume color={color}/>
        <EffectsControls destination = {Destination} color={color}/>
       
    </div> );
}
 
export default MacroControls;
