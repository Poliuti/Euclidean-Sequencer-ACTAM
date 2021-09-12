import CutOffSlider from "./CutOffSlider";
import RevDecaySlider from "./RevDecaySlider";
import myReverb from "./reverb";
import RevWetSlider from "./RevWetSlider";

const ReverbControls = () => {
  return (
    <div className="reverb-controls">
      <RevDecaySlider reverb={myReverb} />
      <RevWetSlider reverb={myReverb} />
      <CutOffSlider />
    </div>
  );
};

export default ReverbControls;
