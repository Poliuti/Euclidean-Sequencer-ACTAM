import { useEffect, useRef } from "react";
import { Transport } from "tone";


const StepSlider = ({
  defaultValue,
  value,
  setNumSteps,
  setNumPulses,
  numPulses,
  setNumRotations,
  numRotations,
  /* setInitialPositionArray  */
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

    /* setInitialPositionArray([0,0,0,0]); */
    Transport.stop();
    /*  Transport.start("+0.5");  */
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
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        onPointerDown={() => Transport.stop()}
        onPointerUp={() => Transport.start()}
        onChange={(e) => onStepChange(e.target.valueAsNumber)}
        id="ss"
      />
      <label htmlFor="ss">Steps: {value}</label>
    </div>
  );
};

export default StepSlider;
