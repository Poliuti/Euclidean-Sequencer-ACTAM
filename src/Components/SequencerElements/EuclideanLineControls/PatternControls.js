import { useState, useEffect, useContext } from "react";
import PulseSlider from "./PulseSlider";
import RotateSlider from "./RotateSlider";
import StepSlider from "./StepSlider";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
import EuclideanUnit from "../../../EuclideanUnit";
import { useIsMount } from "../../../Functions/useIsMount";



const PatternControls = ({ idx, unitList, setUnitList, color }) => {
  
  const { currentTransportState, setCurrentTransportState, dummy, setDummy } =
    useContext(EnvironmentContext);

  const [numSteps, setNumSteps] = useState(unitList[idx].numSteps);
  const [numPulses, setNumPulses] = useState(unitList[idx].numPulses);
  const [numRotations, setNumRotations] = useState(unitList[idx].numRotations);


  const isMount = useIsMount();

  useEffect(() => {
    if (!isMount) {
      setNumSteps(unitList[idx].numSteps);
      setNumPulses(unitList[idx].numPulses);
      setNumRotations(unitList[idx].numRotations);
    }
  }, [unitList]);

  useEffect(() => {
    //updating unitList when numSteps or numPulses or numRotations changes

    if (!isMount) {
      let tempList = [...unitList];
      tempList[idx] = new EuclideanUnit(
        numSteps,
        numPulses,
        numRotations,
        ""
      ).setID(idx);

      setUnitList(tempList);
    }
  }, [numSteps, numPulses, numRotations]);

  return (
    <div className="pattern-controls" >
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
