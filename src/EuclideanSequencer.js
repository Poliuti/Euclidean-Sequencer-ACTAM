import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "./Contexts/Custom/CustomContext";
import TempoControls from "./Controls/TempoControls";
import PatternControlsList from "./Controls/PatternControlsList";
import * as Tone from "tone";
import PlayPauseButton from "./Controls/PlayPauseButton";

const EuclideanSequencer = () => {
  const {
    linesList,
    setLinesList,
    tempo,
    setTempo,
    customDefault,
    playbackState,
    setPlaybackState,
    sequenza,
    synth
  } = useContext(CustomContext);

useEffect(() => {
  sequenza.dispose();
  Tone.Transport.stop();
  sequenza.set({
	events: linesList[0].euclideanArray,
  });
}, [linesList[0].euclideanArray])

console.log("Sequenza in EuclideanSequencer: ")
 console.log(sequenza._eventsArray);

const handlePlayClick = () => {
  sequenza.start()
  console.log(sequenza._eventsArray);
  console.log(sequenza);
  
  Tone.Transport.start();

  
}

const handleStopClick = () => {
  

  Tone.Transport.stop();

}



const handleContextResumeClick = () => {
Tone.context.resume();
  console.log("resumed");
  //Tone.start();

}

const handlePositionClick = () => {
  console.log(Tone.Transport.position);

}

  return (
    <div className="euclidean-sequencer">
      {/* {<PlayPauseButton
        playbackState={playbackState}
        setPlaybackState={setPlaybackState}
        linesList={linesList}
        sequenza={sequenza}
      />} */}
      <TempoControls tempo={tempo} setTempo={setTempo} />
      <PatternControlsList
        linesList={linesList}
        setLinesList={setLinesList}
        customDefault={customDefault}
      />
      <button onClick={handlePlayClick} className="play">Play Diocan</button>
      <button onClick={handleStopClick} className="stop">Stop Diocan</button>
      <button onClick={handleContextResumeClick} className="start-context">Start Context</button>
      <button onClick={handlePositionClick} className="position">Transport Position</button>
    </div>
  );
};

export default EuclideanSequencer;
