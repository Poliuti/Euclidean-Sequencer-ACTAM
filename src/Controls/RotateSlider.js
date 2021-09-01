import { useEffect, useRef } from "react";
import { Transport } from "tone";

const RotateSlider = ({ defaultValue, value, max, setNumRotations,/*  setInitialPositionArray */}) => {
  const rotateSliderRef = useRef(null);

  const handleChange = (sliderValue) => {
    setNumRotations(sliderValue);
    /* setInitialPositionArray([0,0,0,0]); */
    Transport.stop();
    /* Transport.start("+0.02") */

  }

  return (
    <div className="Rotate-slider">
      <input
        ref={rotateSliderRef}
        required
        type="range"
        min="0"
        defaultValue={defaultValue}
        max={max}
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        onPointerDown={() => Transport.stop()}
        onPointerUp={() => Transport.start()}
        onChange={(e) => handleChange(e.target.valueAsNumber)}
        id="rs"
      />
      <label htmlFor="rs">Rotations: {value}</label>
    </div>
  );
};

export default RotateSlider;
