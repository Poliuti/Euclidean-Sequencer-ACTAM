import { useRef } from "react";
import { Transport } from "tone";

const PulseSlider = ({
  value,
  max,
  setNumPulses,
  color,
  currentTransportState,
  setCurrentTransportState,
}) => {
  const ciao = document.getElementsByClassName('Dropdown-menu');
  console.log("AH ALLORA C'è");
  console.log(ciao);

  const pulseSliderRef = useRef(null);

  const handleChange = (sliderValue) => {
    setNumPulses(sliderValue);
  };

  const handlePointerDown = () => {
    if (Transport.state === "started") {
      setCurrentTransportState(1);
      Transport.stop();
    } else {
      setCurrentTransportState(0);
      Transport.stop();
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

