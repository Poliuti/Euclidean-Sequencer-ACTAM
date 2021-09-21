import MuteButton from "./MuteButton";
import PanSlider from "./PanSlider";
import SoloButton from "./SoloButton";
import VolumeSlider from "./VolumeSlider";

const ChannelControls = ({ channel, color }) => {
  return (
    <div className="channel-controls">
      <PanSlider channel={channel} color = {color}/>
      <VolumeSlider channel={channel} color = {color}/>
      <div className="mute_solo">
        <MuteButton channel={channel} />
        <SoloButton channel={channel} />
        </div>
    </div>
  );
};

export default ChannelControls;
