import { context } from "tone";
import startSequences from "../../../Functions/startSequences";

const PlayButton = ({ sequencesList }) => {
  
 
  const handleContextResumeClick = () => {
    if (context.state === "suspended") {
      context.resume();
    } 
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
