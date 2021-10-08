import { context } from "tone";
import startSequences from "../../../Functions/startSequences";

const PlayButton = ({ sequenceList }) => {
 
  const handleContextResumeClick = () => {
    if (context.state === "suspended") {
      context.resume();
    } 
    startSequences(sequenceList);
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
