import * as Tone from "tone";

const BpmSlider = ({ tempo, setTempo }) => {
  return (
    <div className="bpm-slider">
      <input
        type="range"
        min="30"
        step="1"
        max="230"
        defaultValue={tempo.bpm}
        required
        onChange={(e) => {
          setTempo({ ...tempo, bpm: parseInt(e.target.valueAsNumber) });
          Tone.Transport.bpm.value = parseInt(e.target.valueAsNumber);
        }}
        id="bpms"
      />
      <label htmlFor="bpms">BPM: {tempo.bpm}</label>
    </div>
  );
};

export default BpmSlider;
