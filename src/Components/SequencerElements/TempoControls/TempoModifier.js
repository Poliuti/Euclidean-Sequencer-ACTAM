import { useState } from "react";
import * as Tone from "tone";

const TempoModifier = ({ tempo, setTempo, index }) => {
  
  let perDueClassName='';

  if (tempo.tempoSpeedIndexForTone[index]==='64n') 
  {
    perDueClassName='Limit_up'
  }

  let divisoDueClassName='';

  if (tempo.tempoSpeedIndexForTone[index]==='1n') 
  {
    divisoDueClassName='Limit_down'
  }

  const handleDouble = (element) => {
    let tempoUpdate = { ...tempo };
    if (tempoUpdate.tempoSpeedIndex[index] <= 4)
    {tempoUpdate.tempoSpeedIndex[index] *= 2;
    tempoUpdate.tempoSpeedIndexForTone[index] = `${
      8 * tempoUpdate.tempoSpeedIndex[index]
    }n`;
    setTempo(tempoUpdate);
    if (element.classList.contains('Limit_down'))
        element.classList.remove('Limit_down')
  }
    Tone.Transport.stop();
    Tone.Transport.start("+0.1");
  };

  const handleHalf = (element) => {
    let tempoUpdate = { ...tempo };
    if (tempoUpdate.tempoSpeedIndex[index] > 1/8)
    {tempoUpdate.tempoSpeedIndex[index] /= 2;
    tempoUpdate.tempoSpeedIndexForTone[index] = `${
      8 * tempoUpdate.tempoSpeedIndex[index]
    }n`;
    setTempo(tempoUpdate);
    if (element.classList.contains('Limit_up'))
    element.classList.remove('Limit_up')
    }
    Tone.Transport.stop();
    Tone.Transport.start("+0.1");
  };


  return (
    <div className="tempo-modifier">
      <button onClick= {(e)=>handleDouble(e.currentTarget)} className={`per-due ${perDueClassName}` } >
      </button>
      <button onClick={(e)=>handleHalf(e.currentTarget)} className={`diviso-due ${divisoDueClassName}`}>
      </button>
      <h4>{`1 / ${8 * tempo.tempoSpeedIndex[index]}`}</h4>
    </div>
  );
};

export default TempoModifier;
