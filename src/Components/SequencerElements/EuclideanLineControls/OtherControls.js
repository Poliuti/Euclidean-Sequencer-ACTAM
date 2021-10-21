import ChannelControls from "../ChannelControls/ChannelControls";
import StepSubdModifier from "./StepSubdModifier";


const OtherControls = ({ channel, tempo, setTempo, index, color }) => {
  return (
    <div className="other-controls">
      <ChannelControls channel={channel} color={color} index = {index}/>
      
      <StepSubdModifier tempo={tempo} setTempo={setTempo} index={index} />
    </div>
  );
};

export default OtherControls;
