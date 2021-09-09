import { useState, useEffect } from "react";
import PulseSlider from "./PulseSlider";
import RotateSlider from "./RotateSlider";
import StepSlider from "./StepSlider";
import "./patternControls.css";
import "./test_style.css"
import bjorklund from "./../bjorklund";
import TempoModifier from "./TempoModifier";
import colora from "./colora";


const PatternControls = ({
  idx,
  linesList,
  setLinesList,
  setTempo,
  tempo,
  sequenceList,
  setInitialPositionArray
}) => {
  const [numSteps, setNumSteps] = useState(linesList[idx].numSteps);
  const [numPulses, setNumPulses] = useState(linesList[idx].numPulses);
  const [numRotations, setNumRotations] = useState(linesList[idx].numRotations);
  const [note, setNote] = useState("C3");

  console.log("Tempo Inside PatternControls: ");
  console.log(tempo);

  console.log("PatternControls " + idx + " ha re rendered ");


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


/*   useEffect(() => {
   colora(bjorklund(numSteps, numPulses, numRotations), idx);
  }, [numSteps, numPulses, numRotations]) */

  

  

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
        setInitialPositionArray={setInitialPositionArray}
      />
      <PulseSlider
        defaultValue={numPulses}
        value={linesList[idx].numPulses}
        max={numSteps}
        setNumPulses={setNumPulses}
        setInitialPositionArray={setInitialPositionArray}
        
      />
      <RotateSlider
        defaultValue={numRotations}
        value={linesList[idx].numRotations}
        max={numSteps - 1}
        setNumRotations={setNumRotations}
        setInitialPositionArray={setInitialPositionArray}
      />
      <TempoModifier tempo={tempo} setTempo={setTempo} index={idx} />

      
      

      <div>
        <ul style={{ display: "flex", listStyleType: "none" }}>
          {linesList[idx].euclideanArray.map((cell, id) => (
            <li key={id}>{cell}</li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default PatternControls;


