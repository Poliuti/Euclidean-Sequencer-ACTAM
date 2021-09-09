import { useState } from "react";
import * as Tone from "tone";
import computeTatum from "../computeTatum";

const BpmSlider = ({tempo, setTempo}) => {

  const [tempoo, setTempoo] = useState(120);
  return (
    <div className="slider-base bpm-slider">
      <input
        type="range"
        min="30"
        step="1"
        max="230"
        defaultValue={tempo.bpm}
        required
        onChange={(e) => {
          let newBpmValue = parseInt(e.target.valueAsNumber);
          let newTempo = {...tempo, bpm : newBpmValue};
         
          setTempoo(newBpmValue);
          Tone.Transport.stop();
          Tone.Transport.bpm.value = newBpmValue;
          Tone.Transport.start();
          newTempo.tatum = newTempo.tatum.map((tatum, indexx) => 120 / Tone.Transport.bpm.value * tatum);
          setTempo(newTempo);
          console.log(newTempo);
          console.log(Tone.Transport.getSecondsAtTime());

        }}
        id="bpms"
      />
      <label htmlFor="bpms">BPM: {tempoo}</label>
    </div>
  );
};

export default BpmSlider;

//computeTatum(Tone.Transport.bpm.value, newTempo.tempoSpeedIndex[indexx]
// 60 bpm sono 60 quarti al minuto ---> 1 battito al secondo.---> tatum = 1000 msec
// 120 bpm sono 120 quarti al minuto, cioè 240 ottavi al minuto, cioè 4 battiti al secondo--->tatum= 250 msec