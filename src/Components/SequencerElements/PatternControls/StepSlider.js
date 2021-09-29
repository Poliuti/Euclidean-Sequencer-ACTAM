import {useRef } from "react";
import { Transport } from "tone";

const StepSlider = ({
  value,
  setNumSteps,
  setNumPulses,
  numPulses,
  setNumRotations,
  numRotations,
  color,
  currentTransportState,
  setCurrentTransportState,
}) => {
  const stepSliderRef = useRef(null);

  const onStepChange = (num) => {
    setNumSteps(num);
    if (num <= numPulses - 1) {
      setNumPulses(num);
    }
    if (num <= numRotations) {
      setNumRotations(num - 1);
    }

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
  };

  return (
    <div className="slider-pattern step-slider">
      <input
        ref={stepSliderRef}
        type="range"
        min="1"
        step="1"
        max="32"
        required
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        onPointerDown={handlePointerDown}
        onPointerUp={() => {
          if (currentTransportState) {
            Transport.start();
          }
        }}
        value={value}
        onChange={(e) => onStepChange(e.target.valueAsNumber)}
        style={{ "--c": `${color}` }}
      />
      <label htmlFor="ss">Steps: {value}</label>
    </div>
  );
};

export default StepSlider;
