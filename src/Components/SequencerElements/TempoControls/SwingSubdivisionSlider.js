import { useState } from "react";
import { Transport } from "tone";

const SwingSubdivisionSlider = ({ color }) => {
  const [swingSubd, setSwingSubd] = useState("8");
  
  return (
    <div className="slider-base swing-subd-slider">
      <label htmlFor="swing-subd-slid">
        Swing Subdivision: {`1/${swingSubd}`}
      </label>
      <input
        type="range"
        defaultValue="3"
        min="2"
        max="4"
        step="1"
        id="swing-subd-slid"
        onChange={(e) => {
          Transport.swingSubdivision = `${Math.pow(2, parseInt(e.target.valueAsNumber))}n`;
          setSwingSubd(Math.pow(2, parseInt(e.target.valueAsNumber)));
        }}
        style={{ "--c": `${color}` }}
      />
    </div>
  );
};

export default SwingSubdivisionSlider;
