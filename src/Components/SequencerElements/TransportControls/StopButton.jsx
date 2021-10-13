import colora from "../../../Functions/colora";
import { Transport } from "tone";

const StopButton = ({ sequencesList, dummy, setDummy, euclideanPatternsList, setCurrentTransportState }) => {
  

  const handleStopClick = () => {
    Transport.stop();

    sequencesList.forEach((seq, index) => {
      seq.stop();
    });
    

    let dumDummy = dummy + 1;
    setDummy(dumDummy);

    euclideanPatternsList.forEach((line, ind) => {
      colora(line, ind);
    });

   

    
  };

  return (
    <div className="stop-button-cont">
      <button className="stop" onClick={handleStopClick}></button>
    </div>
  );
};

export default StopButton;
