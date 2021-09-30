import { useContext } from "react";
import { Transport } from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
const BpmSlider = ({ tempo, setTempo, color }) => {
  const { currentTransportState, setCurrentTransportState } =
    useContext(EnvironmentContext);

 

  const handlePointerDown = () => {
    
    if (Transport.state === "started") {
      setCurrentTransportState(1);
    } else {
      setCurrentTransportState(0);
    }
    
  };

  return (
    <div className="slider-base bpm-slider">
      <label htmlFor="bpms">BPM: {tempo.bpm}</label>
      <input
        type="range"
        min="50"
        step="1"
        max="230"
        defaultValue={tempo.bpm}
        required
        onChange={(e) => {
          
          let newBpmValue = parseInt(e.target.valueAsNumber);
          let newTempo = { ...tempo, bpm: newBpmValue };
          setTempo(newTempo);
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={() => {
          if (currentTransportState) {
            Transport.start();
          }
        }}
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        id="bpms"
        style={{ "--c": `${color}` }}
      />
    </div>
  );
};

export default BpmSlider;
