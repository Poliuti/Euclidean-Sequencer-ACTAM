import { useState } from "react";

const VolumeSlider = ({ channel }) => {
  const [volume, setVolume] = useState(
    parseInt(Math.round(channel.volume.value))
  );
  

  return (
    <div className="slider-pattern volume-slider">
      <input
        type="range"
        min="-100"
        step="1"
        max="0"
        defaultValue={channel.volume.value}
        required
        onChange={(e) => {
          channel.volume.value = e.target.valueAsNumber;
          setVolume(e.target.valueAsNumber);
        }}
        id="volume"
      />
      <label htmlFor="volume">Volume: {volume}</label>
    </div>
  );
};

export default VolumeSlider;
