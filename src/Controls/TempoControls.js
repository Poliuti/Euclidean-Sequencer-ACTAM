import BpmSlider from "./BpmSlider"

import computeTatum from "./../computeTatum"
import React, { useEffect } from "react";
import { TabPane } from "react-bootstrap";
import * as Tone from "tone";
import SwingSlider from "../SwingSlider";
import SwingSubdivisionSlider from "../SwingSubdivisionSlider";
import { Transport } from "tone/build/esm/core/clock/Transport";


const TempoControls = ({tempo, setTempo}) => {

  
  

  return <div className="tempo-controls">
      <BpmSlider tempo={tempo} setTempo={setTempo} />
      <SwingSlider swingPercentage={Tone.Transport.swing} transport={Tone.Transport}/>
      <SwingSubdivisionSlider transport = {Tone.Transport}/>
      
      <hr />
  </div>;
};

export default TempoControls;
