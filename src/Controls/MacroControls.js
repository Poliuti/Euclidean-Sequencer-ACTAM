import { Destination } from "tone";
import MacroVolume from "./MacroVolume";
import ReverbControls from "./ReverbControls";

const MacroControls = () => {
  return (
    <div className="macro-controls">
      <MacroVolume />
      <ReverbControls destination={Destination} />
    </div>
  );
};

export default MacroControls;
