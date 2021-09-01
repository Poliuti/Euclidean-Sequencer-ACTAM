import { useState } from "react";
import * as Tone from "tone";

const MacroVolume = () => {


    const [volume, setVolume] = useState(parseInt(Tone.Destination.volume.value));
    
    return ( <div className="macro-volume">
        <input
        type="range"
        min="-70"
        step="1"
        max="0"
        defaultValue={Tone.Destination.volume.value}
        required
        onChange= {(e) => {
            Tone.Destination.volume.value = parseInt(e.target.valueAsNumber);
            setVolume(parseInt(Tone.Destination.volume.value));
        }}
        id="volume"
      />
      <label htmlFor="volume">Volume: {volume}</label>
    </div> );
}
 
export default MacroVolume;