import { useState } from "react";

const PanSlider = ({ channel }) => {
  const [pan, setPan] = useState(Math.round(channel.pan.value * 100) / 100);

  const onPanChange = (panValue) => {
    channel.pan.value = panValue;
    setPan(panValue);
  };

  return (
    <div className="pan-slider">
      <input
        type="range"
        min="-1"
        step="0.1"
        max="1"
        defaultValue={channel.pan.value}
        required
        onChange={(e) => onPanChange(e.target.valueAsNumber)}
        id="pan"
      />
      <label htmlFor="pan"> Pan: {pan}</label>
    </div>
  );
};

export default PanSlider;
