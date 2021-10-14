import { useState } from "react";

const SwingSlider = ({ transport, color }) => {
  const [swing, setSwing] = useState(0);
  
  return (
    
    <div className="slider-base swing-slider">
      <label htmlFor="swingSlider">Swing: {Math.round(swing * 100)} %</label>
      <input
        type="range"
        defaultValue={0}
        min="0"
        max="100"
        id="swingSlider"
        onChange={(e) => {
          transport.swing = parseInt(e.target.valueAsNumber) / 100;
          setSwing(parseInt(e.target.valueAsNumber) / 100);
        }}
        style={{ "--c": `${color}` }}
      />
    </div>
  );
};

export default SwingSlider;
