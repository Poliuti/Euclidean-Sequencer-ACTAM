import { useState } from "react";

const RevWetSlider = ({ reverb, color }) => {
  const [wet, setWet] = useState(reverb.wet.value);

  
    return ( <div className="slider-base rev-wet-slider">
        <input
        type="range"
        min="0"
        step="0.01"
        max="1"
        defaultValue={reverb.wet.value}
        required
        onChange={(e) => {
          reverb.wet.value = Math.round(e.target.valueAsNumber * 100) / 100;
          setWet(Math.round(reverb.wet.value * 100) / 100);
        }}
        id="wet"
        style={{"--c": `${color}`}}
      />
      <label htmlFor="wet">Rev Wet: {wet} %</label>
    </div>
  );
};

export default RevWetSlider;
