
import React from "react";
import * as Tone from "tone";
import BpmSlider from "./BpmSlider";
import SwingSlider from "./SwingSlider";
import SwingSubdivisionSlider from "./SwingSubdivisionSlider";



const TempoControls = ({ tempo, setTempo, color }) => {
  return (
    <div className="tempo-controls">
      <BpmSlider tempo={tempo} setTempo={setTempo} color={color} />
      <SwingSlider
        swingPercentage={Tone.Transport.swing}
        transport={Tone.Transport}
        color={color}
      />
      <SwingSubdivisionSlider transport={Tone.Transport} color={color}/>

      <hr />
    </div>
  );
};

export default TempoControls;
