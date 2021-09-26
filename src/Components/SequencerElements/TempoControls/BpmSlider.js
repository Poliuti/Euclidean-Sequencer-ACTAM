import * as Tone from "tone";
const BpmSlider = ({ tempo, setTempo, color }) => {
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
          Tone.Transport.stop();

          Tone.Transport.start("+0.1");
        }}
        id="bpms"
        style={{"--c": `${color}`}}
      />
      <label htmlFor="bpms">BPM: {tempo.bpm}</label>
    </div>
  );
};

export default BpmSlider;
