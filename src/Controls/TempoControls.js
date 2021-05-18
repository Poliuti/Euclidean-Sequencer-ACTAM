import BpmSlider from "./BpmSlider"
import TempoModifier from "./TempoModifier"
import computeTatum from "./../computeTatum"
import React, { useEffect } from "react";


const TempoControls = ({tempo, setTempo}) => {
useEffect(() => {
    setTempo({...tempo, tatum: computeTatum(tempo.bpm)})
}, [tempo.bpm])



  return <div className="tempo-controls">
      <BpmSlider tempo={tempo} setTempo={setTempo}/>
      <TempoModifier tempo={tempo} setTempo={setTempo}/>
      <hr />
  </div>;
};

export default TempoControls;
