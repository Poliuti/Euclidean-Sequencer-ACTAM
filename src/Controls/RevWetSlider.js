import { useState } from "react";

const RevWetSlider = ({ reverb }) => {
  const [wet, setWet] = useState(reverb.wet.value);

  return (
    <div className="rev-wet-slider">
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
      />
      <label htmlFor="wet">Wet: {wet}</label>
    </div>
  );
};

export default RevWetSlider;
