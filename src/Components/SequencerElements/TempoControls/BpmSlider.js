import { useContext } from "react";
import { Transport } from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
const BpmSlider = ({ tempo, setTempo, color }) => {
  const { currentTransportState, setCurrentTransportState } =
    useContext(EnvironmentContext);

  const handlePointerDown = () => {
    if (Transport.state === "started") {
      setCurrentTransportState(1);
      Transport.stop();
    } else {
      setCurrentTransportState(0);
      Transport.stop();
    }
    console.log(Transport.state);
    Transport.stop();
  };

  return (
    <div className="slider-base bpm-slider">
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
        id="bpms"
        style={{ "--c": `${color}` }}
      />
      <label htmlFor="bpms">BPM: {tempo.bpm}</label>
    </div>
  );
};

export default BpmSlider;

/* {{Transport.stop();
  Transport.start("+0.1");}} */
