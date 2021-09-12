import myReverb from "./../../../Default/reverb";
import CutOffSlider from "./CutOffSlider";
import RevDecaySlider from "./RevDecaySlider";
import RevWetSlider from "./RevWetSlider";

const EffectsControls = () => {
  return (
    <div className="effects-controls">
      <RevDecaySlider reverb={myReverb} />
      <RevWetSlider reverb={myReverb} />
      <CutOffSlider />
    </div>
  );
};

export default EffectsControls;
