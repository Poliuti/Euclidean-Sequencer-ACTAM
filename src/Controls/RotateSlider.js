import { useEffect, useRef } from "react";

const RotateSlider = ({ defaultValue, value, max, setNumRotations }) => {
  const rotateSliderRef = useRef(null);


  return (
    <div className="Rotate-slider">
      <input
        ref={rotateSliderRef}
        required
        type="range"
        min="0"
        defaultValue={defaultValue}
        max={max}
        onChange={(e) => setNumRotations(e.target.valueAsNumber)}
        id="ps"
      />
      <label htmlFor="ps">Rotations: {value}</label>
    </div>
  );
};

export default RotateSlider;
