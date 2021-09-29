import ChannelControls from "../ChannelControls/ChannelControls";
import TempoModifier from "../TempoControls/TempoModifier";
import PitchSlider from "./PitchSlider";

const OtherControls = ({ channel, tempo, setTempo, index, color }) => {
  return (
    <div className="other-controls">
      <ChannelControls channel={channel} color={color} index = {index}/>
      
      <TempoModifier tempo={tempo} setTempo={setTempo} index={index} />
    </div>
  );
};

export default OtherControls;
