import { useEffect, useRef } from "react";
import { Transport } from "tone";

const PulseSlider = ({ defaultValue, value, max, setNumPulses, /* setInitialPositionArray */ }) => {
  const pulseSliderRef = useRef(null);

  const handleChange = (sliderValue) => {
    setNumPulses(sliderValue);
    /* setInitialPositionArray([0,0,0,0]); */
    Transport.stop();
    /* Transport.start("+0.02") */

  }

  return (
    <div className="slider-base Pulse-slider">
      <input
        ref={pulseSliderRef}
        required
        type="range"
        min="0"
        defaultValue={defaultValue}
        max={max}
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        onPointerDown={() => Transport.stop()}
        onPointerUp={() => Transport.start()}
        onChange = {(e)=> handleChange(e.target.valueAsNumber) }
        
        id="ps"
      />
      <label htmlFor="ps">Pulses: {value}</label>
    </div>
  );
};

export default PulseSlider;
