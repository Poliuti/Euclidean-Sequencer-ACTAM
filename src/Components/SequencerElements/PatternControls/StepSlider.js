import { useRef } from "react";
import { Transport } from "tone";

const StepSlider = ({
  defaultValue,
  value,
  setNumSteps,
  setNumPulses,
  numPulses,
  setNumRotations,
  numRotations,
  color
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

  return (
    <div className="slider-pattern step-slider">
      <input
        ref={stepSliderRef}
        type="range"
        min="1"
        step="1"
        max="32"
        defaultValue={defaultValue}
        required
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        onPointerDown={() => Transport.stop()}
        onPointerUp={() => Transport.start()}
        onChange={(e) => onStepChange(e.target.valueAsNumber)}
        style={{"--c": `${color}`}}
      />
      <label htmlFor="ss">Steps: {value}</label>
    </div>
  );
};

export default StepSlider;
