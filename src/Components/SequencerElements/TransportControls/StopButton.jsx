
import { Transport } from "tone";

const StopButton = ({ sequencesList, dummy, setDummy }) => {
  

  const handleStopClick = () => {
    Transport.stop();

    sequencesList.forEach((seq) => {
      seq.stop();
    });
    

    let dumDummy = dummy + 1;
    setDummy(dumDummy);

  };

  return (
    <div className="stop-button-cont">
      <button className="stop" onClick={handleStopClick}></button>
    </div>
  );
};

export default StopButton;
