import { Transport } from "tone";
import BpmSlider from "./BpmSlider";
import SwingSlider from "./SwingSlider";
import SwingSubdivisionSlider from "./SwingSubdivisionSlider";

const TempoControls = ({ tempo, setTempo, color }) => {
  
  return (
    <div id="tempo-controls">
      <BpmSlider tempo={tempo} setTempo={setTempo} color={color} />
      <SwingSlider
        swingPercentage={Transport.swing}
        transport={Transport}
        color={color}
      />
      <SwingSubdivisionSlider color={color} />
    </div>
  );
};

export default TempoControls;
