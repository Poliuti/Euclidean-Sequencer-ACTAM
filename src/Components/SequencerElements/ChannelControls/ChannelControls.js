import PitchSlider from "../EuclideanLineControls/PitchSlider";
import MuteButton from "./MuteButton";
import PanSlider from "./PanSlider";
import SoloButton from "./SoloButton";
import VolumeSlider from "./VolumeSlider";

const ChannelControls = ({ channel, color, index }) => {
  return (
    <div className="channel-controls">
      <PanSlider channel={channel} color = {color}/>
      <VolumeSlider channel={channel} color = {color}/>
      <PitchSlider id = {index} />
      <div className="mute_solo">
        <MuteButton channel={channel} />
        <SoloButton channel={channel} />
        </div>
    </div>
  );
};

export default ChannelControls;
