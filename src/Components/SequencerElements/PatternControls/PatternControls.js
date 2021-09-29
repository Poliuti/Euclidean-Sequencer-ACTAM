import { useState, useEffect, useContext } from "react";
import PulseSlider from "./PulseSlider";
import RotateSlider from "./RotateSlider";
import StepSlider from "./StepSlider";
import colora from "../../../Functions/colora";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
import EuclideanLine from "../../../EuclideanLine";
import PitchSlider from "./PitchSlider";

const PatternControls = ({ idx, linesList, setLinesList, color }) => {
  const { currentTransportState, setCurrentTransportState } =
    useContext(EnvironmentContext);
  const [numSteps, setNumSteps] = useState(linesList[idx].numSteps);
  const [numPulses, setNumPulses] = useState(linesList[idx].numPulses);
  const [numRotations, setNumRotations] = useState(linesList[idx].numRotations);

  useEffect(() => {
    setNumSteps(linesList[idx].numSteps);
    setNumPulses(linesList[idx].numPulses);
    setNumRotations(linesList[idx].numRotations);
  }, [linesList]);

  useEffect(() => {
    let tempList = [...linesList];
    tempList[idx] = new EuclideanLine(
      numSteps,
      numPulses,
      numRotations,
      ""
    ).setID(idx);

    setLinesList(tempList);

    colora(tempList[idx].euclideanArray, idx);
  }, [numSteps, numPulses, numRotations]);

  return (
    <div className="pattern-controls" id={idx}>
      <StepSlider
        value={numSteps}
        numPulses={numPulses}
        setNumSteps={setNumSteps}
        setNumPulses={setNumPulses}
        setNumRotations={setNumRotations}
        numRotations={numRotations}
        color={color}
        currentTransportState={currentTransportState}
        setCurrentTransportState={setCurrentTransportState}
      />
      <PulseSlider
        value={numPulses}
        max={numSteps}
        setNumPulses={setNumPulses}
        color={color}
        currentTransportState={currentTransportState}
        setCurrentTransportState={setCurrentTransportState}
      />
      <RotateSlider
        value={numRotations}
        max={numSteps - 1}
        setNumRotations={setNumRotations}
        color={color}
        currentTransportState={currentTransportState}
        setCurrentTransportState={setCurrentTransportState}
      />
      

      
    </div>
  );
};

export default PatternControls;
