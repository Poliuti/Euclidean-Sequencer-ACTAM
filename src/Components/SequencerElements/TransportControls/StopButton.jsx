import colora from "../../../Functions/colora";
import { Transport } from "tone";

const StopButton = ({ sequenceList, dummy, setDummy, patternArrayList }) => {
  const handleStopClick = () => {
    Transport.stop();

    sequenceList.forEach((seq, index) => {
      seq.stop();
    });

    let dumDummy = dummy + 1;
    setDummy(dumDummy);

    patternArrayList.forEach((line, ind) => {
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
