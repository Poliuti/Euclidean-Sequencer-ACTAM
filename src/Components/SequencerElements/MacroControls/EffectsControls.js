import myReverb from "../../../Default/myReverb";
import CutOffSlider from "./CutOffSlider";
import RevDecaySlider from "./RevDecaySlider";
import RevWetSlider from "./RevWetSlider";

const EffectsControls = ({color}) => {
  
  return (
    <div className="effects-controls">
      <RevDecaySlider reverb={myReverb} color={color} />
      <RevWetSlider reverb={myReverb} color={color} />
      <CutOffSlider color={color} />
    </div>
  );
};

export default EffectsControls;
