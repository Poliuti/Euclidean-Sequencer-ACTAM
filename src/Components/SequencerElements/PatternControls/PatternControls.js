import { useState, useEffect, useContext } from "react";
import PulseSlider from "./PulseSlider";
import RotateSlider from "./RotateSlider";
import StepSlider from "./StepSlider";
import "./../../../Styles/patternControls.css";
import bjorklund from "../../../Functions/bjorklund";
import colora from "../../../Functions/colora";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";



const PatternControls = ({ idx, linesList, setLinesList, color }) => {



  const {
    currentTransportState, setCurrentTransportState
    
  } = useContext(EnvironmentContext);
  const [numSteps, setNumSteps] = useState(linesList[idx].numSteps);
  const [numPulses, setNumPulses] = useState(linesList[idx].numPulses);
  const [numRotations, setNumRotations] = useState(linesList[idx].numRotations);



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
    colora(tempList[idx].euclideanArray, idx);
  }, [numSteps, numPulses, numRotations]);



  return (
    <div className="pattern-controls" id={idx}>
      <StepSlider
        defaultValue={numSteps}
        value={linesList[idx].numSteps}
        numPulses={numPulses}
        setNumSteps={setNumSteps}
        setNumPulses={setNumPulses}
        setNumRotations={setNumRotations}
        numRotations={numRotations}
        color={color}
        currentTransportState = {currentTransportState}
        setCurrentTransportState={setCurrentTransportState}
       
      />
      <PulseSlider
        defaultValue={numPulses}
        value={linesList[idx].numPulses}
        max={numSteps}
        setNumPulses={setNumPulses}
        color={color}
        currentTransportState = {currentTransportState}
        setCurrentTransportState={setCurrentTransportState}
      />
      <RotateSlider
        defaultValue={numRotations}
        value={linesList[idx].numRotations}
        max={numSteps - 1}
        setNumRotations={setNumRotations}
        color={color}
        currentTransportState = {currentTransportState}
        setCurrentTransportState={setCurrentTransportState}
      />
      

      <div>
      </div>
    </div>
  );
};

export default PatternControls;
