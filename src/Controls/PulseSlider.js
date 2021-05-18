import { useEffect, useRef } from "react";

const PulseSlider = ({defaultValue, value, max, setNumPulses}) => {
  const pulseSliderRef = useRef(null);


  return (
    <div className="Pulse-slider">
      <input
        ref={pulseSliderRef}
        required
        type="range"
        min="0"
        defaultValue={defaultValue}
        max={max}
        onChange={(e) => setNumPulses(e.target.valueAsNumber)}
        id="ps"
      />
      <label htmlFor="ps">Pulses: {value}</label>
      
    </div>
  );
};

export default PulseSlider;