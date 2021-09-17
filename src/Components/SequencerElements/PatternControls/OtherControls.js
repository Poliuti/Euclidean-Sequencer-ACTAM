import ChannelControls from "../ChannelControls/ChannelControls";
import TempoModifier from "../TempoControls/TempoModifier";

const OtherControls = ({ channel, tempo, setTempo, index }) => {
  return (
    <div className="other-controls">
      <ChannelControls channel={channel} />
      <TempoModifier tempo={tempo} setTempo={setTempo} index={index} />
    </div>
  );
};

export default OtherControls;
