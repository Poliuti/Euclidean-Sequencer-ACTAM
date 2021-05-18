import { useEffect, useRef } from "react";

const StepSlider = ({
  defaultValue,
  value,
  setNumSteps,
  setNumPulses,
  numPulses,
  setNumRotations,
  numRotations,
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
  };

  return (
    <div className="step-slider">
      <input
        ref={stepSliderRef}
        type="range"
        min="1"
        step="1"
        max="32"
        defaultValue={defaultValue}
        required
        onChange={(e) => onStepChange(e.target.valueAsNumber)}
        id="ss"
      />
      <label htmlFor="ss">Steps: {value}</label>
    </div>
  );
};

export default StepSlider;
