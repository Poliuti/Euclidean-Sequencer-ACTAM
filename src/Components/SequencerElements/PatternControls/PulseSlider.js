import { useRef } from "react";
import { Transport } from "tone";

const PulseSlider = ({
  value,
  max,
  setNumPulses,
  color,
  currentTransportState,
  setCurrentTransportState,
  dummy,
  setDummy
}) => {
  

  const pulseSliderRef = useRef(null);

  const handleChange = (sliderValue) => {
    setNumPulses(sliderValue);
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
    <div className="slider-pattern Pulse-slider">
      <input
        ref={pulseSliderRef}
        required
        type="range"
        min="0"
        value={value}
        max={max}
        onPointerDown={handlePointerDown}
        onPointerUp={() => {
          if (currentTransportState) {
            Transport.start();
          }
          let tempDummy = dummy + 1;
          setDummy(tempDummy);

        }}
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        onChange={(e) => handleChange(e.target.valueAsNumber)}
        id="ps"
        style={{ "--c": `${color}` }}
      />
      <label htmlFor="ps">Pulses: {value}</label>
    </div>
  );
};

export default PulseSlider;

