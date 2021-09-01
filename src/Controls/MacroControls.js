import { Destination } from "tone";
import { Tone } from "tone/build/esm/core/Tone";
import CutOffSlider from "./CutOffSlider";
import MacroVolume from "./MacroVolume"
import ReverbControls from "./ReverbControls"

const MacroControls = () => {
    return ( <div className="macro-controls">
        <MacroVolume />
        <ReverbControls destination = {Destination} />
        
    </div> );
}
 
export default MacroControls;