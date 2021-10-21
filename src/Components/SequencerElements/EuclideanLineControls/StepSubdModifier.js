import { useContext } from "react";
import {Transport} from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";

const StepSubdModifier = ({ tempo, setTempo, index }) => {
  const {
    setCurrentTransportState
    
  } = useContext(EnvironmentContext);
  
  let perDueClassName='';

  if (tempo.stepDurationArray[index]==='32n') 
  {
    perDueClassName='Limit_up'
  }

  let divisoDueClassName='';

  if (tempo.stepDurationArray[index]==='2n') 
  {
    divisoDueClassName='Limit_down'
  }



  const handleDouble = (element) => {
    let tempoUpdate = { ...tempo };
    if (tempoUpdate.stepDurationModifierArray[index] <= 2)
    {tempoUpdate.stepDurationModifierArray[index] *= 2;
    tempoUpdate.stepDurationArray[index] = `${
      8 * tempoUpdate.stepDurationModifierArray[index]
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
    if (tempoUpdate.stepDurationModifierArray[index] > 1/4)
    {tempoUpdate.stepDurationModifierArray[index] /= 2;
    tempoUpdate.stepDurationArray[index] = `${
      8 * tempoUpdate.stepDurationModifierArray[index]
    }n`;
    setTempo(tempoUpdate);
    if (element.classList.contains('Limit_up'))
    element.classList.remove('Limit_up')
    }
  
    if (Transport.state === "started") {
      setCurrentTransportState(1);
      
    } else {
      setCurrentTransportState(0);
      
    }
  };


  return (
    <div className="step-subd-modifier">
      <button onClick= {(e)=>handleDouble(e.currentTarget)} className={`per-due ${perDueClassName}` } >
      </button>
      <button onClick={(e)=>handleHalf(e.currentTarget)} className={`diviso-due ${divisoDueClassName}`}>
      </button>
      <h4>{`1 / ${8 * tempo.stepDurationModifierArray[index]}`}</h4>
    </div>
  );
};

export default StepSubdModifier;
