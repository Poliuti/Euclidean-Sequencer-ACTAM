import { useContext } from "react";
import {Transport} from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";

const TempoModifier = ({ tempo, setTempo, index }) => {
  const {
    setCurrentTransportState
    
  } = useContext(EnvironmentContext);
  
  let perDueClassName='';

  if (tempo.tempoSpeedIndexForTone[index]==='32n') 
  {
    perDueClassName='Limit_up'
  }

  let divisoDueClassName='';

  if (tempo.tempoSpeedIndexForTone[index]==='2n') 
  {
    divisoDueClassName='Limit_down'
  }



  const handleDouble = (element) => {
    let tempoUpdate = { ...tempo };
    if (tempoUpdate.tempoSpeedIndex[index] <= 2)
    {tempoUpdate.tempoSpeedIndex[index] *= 2;
    tempoUpdate.tempoSpeedIndexForTone[index] = `${
      8 * tempoUpdate.tempoSpeedIndex[index]
    }n`;
    setTempo(tempoUpdate);
    if (element.classList.contains('Limit_down'))
        element.classList.remove('Limit_down')
  }

  if (Transport.state === "started") {
    setCurrentTransportState(1);
    
  } else {
    setCurrentTransportState(0);
    
  }
 
  };

  const handleHalf = (element) => {
    let tempoUpdate = { ...tempo };
    if (tempoUpdate.tempoSpeedIndex[index] > 1/4)
    {tempoUpdate.tempoSpeedIndex[index] /= 2;
    tempoUpdate.tempoSpeedIndexForTone[index] = `${
      8 * tempoUpdate.tempoSpeedIndex[index]
    }n`;
    setTempo(tempoUpdate);
    if (element.classList.contains('Limit_up'))
    element.classList.remove('Limit_up')
    }
  
    if (Transport.state === "started") {
      setCurrentTransportState(1);
      Transport.stop();
      Transport.start("+0.1");
    } else {
      setCurrentTransportState(0);
      Transport.stop();
    }
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
