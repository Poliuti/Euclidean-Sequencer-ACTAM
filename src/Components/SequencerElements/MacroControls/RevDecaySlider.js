import { useState } from "react";

const RevDecaySlider = ({ reverb, color }) => {
  const [decay, setDecay] = useState(reverb.decay);
  

  
    return ( <div className="slider-base rev-decay-slider">
        <input
        type="range"
        min="0.01"
        step="0.1"
        max="4"
        defaultValue={reverb.decay}
        required
        onChange={(e) => {
          reverb.decay = Math.round(e.target.valueAsNumber * 100) / 100;
          setDecay(Math.round(reverb.decay * 100) / 100);
        }}
        id="decay"
        style={{"--c": `${color}`}}
      />
      <label htmlFor="decay">Rev Decay: {decay} s</label>
    </div>
  );
};

export default RevDecaySlider;
