
import startSequences from "../../../Functions/startSequences";
import * as Tone from 'tone'


const PlayButton = ({ sequencesList }) => {
 
  

  const resumeContext = async () => {
    await Tone.start();
  }

  const handleContextResumeClick = async () => {
    await resumeContext();
    startSequences(sequencesList);
  };

  return (
    <div className="play-button-cont">
      <button
        className="start-context"
        onClick={handleContextResumeClick}
      ></button>
    </div>
  );
};

export default PlayButton;
