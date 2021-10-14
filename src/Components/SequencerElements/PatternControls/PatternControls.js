import { useState, useEffect, useContext } from "react";
import PulseSlider from "./PulseSlider";
import RotateSlider from "./RotateSlider";
import StepSlider from "./StepSlider";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
import EuclideanLine from "../../../EuclideanLine";
import { useIsMount } from "../../../Functions/useIsMount";


const PatternControls = ({ idx, linesList, setLinesList, color }) => {
  
  const { currentTransportState, setCurrentTransportState, dummy, setDummy } =
    useContext(EnvironmentContext);

  const [numSteps, setNumSteps] = useState(linesList[idx].numSteps);
  const [numPulses, setNumPulses] = useState(linesList[idx].numPulses);
  const [numRotations, setNumRotations] = useState(linesList[idx].numRotations);


  const isMount = useIsMount();

  useEffect(() => {
    if (!isMount) {
      setNumSteps(linesList[idx].numSteps);
      setNumPulses(linesList[idx].numPulses);
      setNumRotations(linesList[idx].numRotations);
    }
  }, [linesList]);

  useEffect(() => {
    //updating LinesList when numSteps or numPulses or numRotations changes

    if (!isMount) {
      let tempList = [...linesList];
      tempList[idx] = new EuclideanLine(
        numSteps,
        numPulses,
        numRotations,
        ""
      ).setID(idx);

      setLinesList(tempList);
    }
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
        dummy={dummy}
        setDummy={setDummy}
      />
      <PulseSlider
        value={numPulses}
        max={numSteps}
        setNumPulses={setNumPulses}
        color={color}
        currentTransportState={currentTransportState}
        setCurrentTransportState={setCurrentTransportState}
        dummy={dummy}
        setDummy={setDummy}
      />
      <RotateSlider
        value={numRotations}
        max={numSteps - 1}
        setNumRotations={setNumRotations}
        color={color}
        currentTransportState={currentTransportState}
        setCurrentTransportState={setCurrentTransportState}
        dummy={dummy}
        setDummy={setDummy}
      />
    </div>
  );
};

export default PatternControls;
