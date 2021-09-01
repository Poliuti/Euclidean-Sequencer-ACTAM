import MuteButton from "./MuteButton";
import PanSlider from "./PanSlider";
import SoloButton from "./SoloButton";
import VolumeSlider from "./VolumeSlider";


const ChannelControls = ({channel}) => {

  
  return (
    <div className="channel-controls">
      <PanSlider channel={channel}/>
      <VolumeSlider channel = {channel} />
      <MuteButton channel = {channel}/>
      <SoloButton channel = {channel}/>
      
    </div>
  );
};

export default ChannelControls;
