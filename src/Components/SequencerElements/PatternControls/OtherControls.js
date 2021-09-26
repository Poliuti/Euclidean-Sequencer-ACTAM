import ChannelControls from "../ChannelControls/ChannelControls";
import TempoModifier from "../TempoControls/TempoModifier";

const OtherControls = ({ channel, tempo, setTempo, index, color, mode }) => {

  return (
    <div className="other-controls">
      <ChannelControls channel={channel} color={color}/>
      {mode && (<TempoModifier tempo={tempo} setTempo={setTempo} index={index} />)}
    </div>
  );
};

export default OtherControls;
