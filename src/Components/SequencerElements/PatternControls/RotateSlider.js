import { useRef } from "react";
import { Transport } from "tone";

const RotateSlider = ({ defaultValue, value, max, setNumRotations, color }) => {
  const rotateSliderRef = useRef(null);

  const handleChange = (sliderValue) => {
    setNumRotations(sliderValue);
    Transport.stop();
  };

  return (
    <div className="slider-pattern Rotate-slider">
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
        style={{"--c": `${color}`}}
      />
      <label htmlFor="rs">Rotations: {value}</label>
    </div>
  );
};

export default RotateSlider;
