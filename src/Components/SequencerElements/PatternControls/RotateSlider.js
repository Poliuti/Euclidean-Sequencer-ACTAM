import { useRef } from "react";
import { Transport } from "tone";

const RotateSlider = ({ defaultValue, value, max, setNumRotations, color,   currentTransportState,
  setCurrentTransportState }) => {
  const rotateSliderRef = useRef(null);

  const handleChange = (sliderValue) => {
    setNumRotations(sliderValue);
    Transport.stop();
  };

  const handlePointerDown = () => {
    if (Transport.state === "started") {
            setCurrentTransportState(1);
            Transport.stop();
          } else {
            setCurrentTransportState(0);
            Transport.stop();
          }
          console.log(Transport.state);
          Transport.stop();
  }

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
        onPointerDown={handlePointerDown}
        onPointerUp={() => {
          if (currentTransportState) {
            Transport.start();
          }
        }}
        onChange={(e) => handleChange(e.target.valueAsNumber)}
        id="rs"
        style={{"--c": `${color}`}}
      />
      <label htmlFor="rs">Rotations: {value}</label>
    </div>
  );
};

export default RotateSlider;
