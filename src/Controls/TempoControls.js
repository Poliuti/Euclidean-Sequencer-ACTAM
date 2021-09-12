import BpmSlider from "./BpmSlider";
import React from "react";
import * as Tone from "tone";
import SwingSlider from "../SwingSlider";
import SwingSubdivisionSlider from "../SwingSubdivisionSlider";

const TempoControls = ({ tempo, setTempo }) => {
  return (
    <div className="tempo-controls">
      <BpmSlider tempo={tempo} setTempo={setTempo} />
      <SwingSlider
        swingPercentage={Tone.Transport.swing}
        transport={Tone.Transport}
      />
      <SwingSubdivisionSlider transport={Tone.Transport} />

      <hr />
    </div>
  );
};

export default TempoControls;
