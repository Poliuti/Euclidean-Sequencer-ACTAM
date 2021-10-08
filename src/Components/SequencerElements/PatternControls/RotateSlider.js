import { useRef } from "react";
import { Transport } from "tone";

const RotateSlider = ({
  value,
  max,
  setNumRotations,
  color,
  currentTransportState,
  setCurrentTransportState,
  dummy,
  setDummy
}) => {
  const rotateSliderRef = useRef(null);

  const handleChange = (sliderValue) => {
    setNumRotations(sliderValue);
    
  };

  const handlePointerDown = () => {
    if (Transport.state === "started") {
      setCurrentTransportState(1);
      
    } else {
      setCurrentTransportState(0);
      
    }
    Transport.stop();
    
  };

  return (
    <div className="slider-pattern Rotate-slider">
      <input
        ref={rotateSliderRef}
        required
        type="range"
        min="0"
        value={value}
        max={max}
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        onPointerDown={handlePointerDown}
        onPointerUp={() => {
          if (currentTransportState) {
            Transport.start();
          }
          let tempDummy = dummy + 1;
          setDummy(tempDummy);
        }}
        onChange={(e) => handleChange(e.target.valueAsNumber)}
        id="rs"
        style={{ "--c": `${color}` }}
      />
      <label htmlFor="rs">Rotations: {value}</label>
    </div>
  );
};

export default RotateSlider;
