import { useState } from "react";

const RevDecaySlider = ({ reverb }) => {
  const [decay, setDecay] = useState(reverb.decay);

  
    return ( <div className="slider-base rev-decay-slider">
        <input
        type="range"
        min="0.01"
        step="0.1"
        max="10"
        defaultValue={reverb.decay}
        required
        onChange={(e) => {
          reverb.decay = Math.round(e.target.valueAsNumber * 100) / 100;
          setDecay(Math.round(reverb.decay * 100) / 100);
        }}
        id="decay"
      />
      <label htmlFor="decay">Decay: {decay}</label>
    </div>
  );
};

export default RevDecaySlider;
