import { useState } from "react";
import * as Tone from "tone";

const TempoModifier = ({ tempo, setTempo, index }) => {
  

  const handleDouble = () => {
    let tempoUpdate = { ...tempo };
    tempoUpdate.tempoSpeedIndex[index] *= 2;
    tempoUpdate.tempoSpeedIndexForTone[index] = `${
      8 * tempoUpdate.tempoSpeedIndex[index]
    }n`;
    setTempo(tempoUpdate);
    Tone.Transport.stop();
    Tone.Transport.start("+0.1");
  };

  const handleHalf = () => {
    let tempoUpdate = { ...tempo };
    tempoUpdate.tempoSpeedIndex[index] /= 2;
    tempoUpdate.tempoSpeedIndexForTone[index] = `${
      8 * tempoUpdate.tempoSpeedIndex[index]
    }n`;
    setTempo(tempoUpdate);
    Tone.Transport.stop();
    Tone.Transport.start("+0.1");
  };


  return (
    <div className="tempo-modifier">
      <button onClick={handleDouble} className="per-due">
        x2
      </button>
      <button onClick={handleHalf} className="diviso-due">
        :2
      </button>
      
    </div>
  );
};

export default TempoModifier;
