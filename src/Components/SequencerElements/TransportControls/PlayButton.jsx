import { Context } from "tone";
import startSequences from "../../../Functions/startSequences";

const PlayButton = ({sequenceList}) => {
    const handleContextResumeClick = () => {
    if (Context.state === "suspended") {
      Context.resume();
    }
    startSequences(sequenceList);

  };

    return (<div className="play-button-cont">
        <button className="start-context" onClick={handleContextResumeClick}></button>
    </div> );
}
 
export default PlayButton;



