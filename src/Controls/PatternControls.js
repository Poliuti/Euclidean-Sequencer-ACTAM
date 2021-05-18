import { useState, useEffect } from "react";
import PulseSlider from "./PulseSlider";
import RotateSlider from "./RotateSlider";
import StepSlider from "./StepSlider";
import "./patternControls.css";
import OnOffButton from "./OnOffButton";
import bjorklund from "./../bjorklund";

const PatternControls = ({ line, idx, linesList, setLinesList }) => {


  const [numSteps, setNumSteps] = useState(linesList[idx].numSteps);
  const [numPulses, setNumPulses] = useState(linesList[idx].numPulses);
  const [numRotations, setNumRotations] = useState(linesList[idx].numRotations);
  const [isActive, setIsActive] = useState("On");
  



  useEffect(() => {
    let tempList = [...linesList];
    tempList[idx] = {
      numSteps: numSteps,
      numPulses: numPulses,
      numRotations: numRotations,
      euclideanArray: bjorklund(numSteps, numPulses, numRotations),
      id: idx,
    };
    setLinesList(tempList);
  }, [numSteps, numPulses, numRotations]);


  return (
    <div className="pattern-controls">
      <StepSlider
        defaultValue={numSteps}
        value={linesList[idx].numSteps}
        numPulses={numPulses}
        setNumSteps={setNumSteps}
        setNumPulses={setNumPulses}
        setNumRotations={setNumRotations}
        numRotations={numRotations}
      />
      <PulseSlider
        defaultValue={numPulses}
        value={linesList[idx].numPulses}
        max={numSteps}
        setNumPulses={setNumPulses}
      />
      <RotateSlider
        defaultValue={numRotations}
        value={linesList[idx].numRotations}
        max={numSteps - 1}
        setNumRotations={setNumRotations}
      />
      <OnOffButton isActive={isActive} setIsActive={setIsActive} />

      <hr />
    </div>
  );
};

export default PatternControls;
