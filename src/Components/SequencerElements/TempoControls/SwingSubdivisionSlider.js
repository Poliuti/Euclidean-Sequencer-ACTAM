import { useState } from "react";
import { Transport } from "tone";

const SwingSubdivisionSlider = ({ color }) => {
  const [swingSubd, setSwingSubd] = useState("8");
  return (
    <div className="slider-base swing-subd-slider">
      <label htmlFor="swing-subd-slid">
        Swing Subdivision: {`1/${swingSubd}`}{" "}
      </label>
      <input
        type="range"
        defaultValue="8"
        min="4"
        max="32"
        step="4"
        id="swing-subd-slid"
        onChange={(e) => {
          Transport.swingSubdivision = `${parseInt(e.target.valueAsNumber)}n`;
          setSwingSubd(parseInt(e.target.valueAsNumber));
        }}
        style={{ "--c": `${color}` }}
      />
    </div>
  );
};

export default SwingSubdivisionSlider;
