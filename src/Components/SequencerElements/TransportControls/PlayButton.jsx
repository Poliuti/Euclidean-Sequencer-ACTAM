
import startSequences from "../../../Functions/startSequences";
import * as Tone from 'tone'
import { useEffect } from "react";
import { useIsMount } from "../../../Functions/useIsMount";


const PlayButton = ({ sequencesList, dummy, setDummy }) => {
 
  
let isMount = useIsMount();
  const resumeContext = async () => {
    await Tone.start();
    Tone.Transport.stop();

    sequencesList.forEach((seq, index) => {
      seq.stop();
    });
    

    let dumDummy = dummy + 1;
    setDummy(dumDummy);

    /* euclideanPatternsList.forEach((line, ind) => {
      colora(line, ind);
    }); */

  }

/*   useEffect(() => {async function dioc(){
    await Tone.start();
  } dioc()}, []) */


  const handleContextResumeClick = () => {
    if (isMount){resumeContext()}
    else {}
    
    /* startSequences(sequencesList); */
    
  };

  const dioc = () => {
    startSequences(sequencesList);
  }

  return (
    <div className="play-button-cont">
      <button
        className="start-context"
        onMouseDown={handleContextResumeClick}
        onMouseUp={dioc}
      ></button>
    </div>
  );
};

export default PlayButton;
