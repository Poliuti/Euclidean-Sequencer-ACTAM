import React, { createContext, useState } from "react";
import bjorklund from "./../../bjorklund";
import computeTatum from "./../../computeTatum"
import * as Tone from "tone";


export const CustomContext = createContext();

const CustomContextProvider = (props) => {
  let customDefault = [
    {
      numSteps: 7,
      numPulses: 3,
      numRotations: 0,
      euclideanArray: [...bjorklund(7, 3, 1)],
      id: 0,
    },
    {
      numSteps: 9,
      numPulses: 2,
      numRotations: 1,
      euclideanArray: [...bjorklund(9, 2, 1)],
      id: 1,
    },
    {
      numSteps: 8,
      numPulses: 7,
      numRotations: 0,
      euclideanArray: [...bjorklund(8, 7, 0)],
      id: 2,
    },
    {
      numSteps: 13,
      numPulses: 4,
      numRotations: 3,
      euclideanArray: [...bjorklund(13, 4, 3)],
      id: 3,
    },
  ];

  let tempoInfo = { bpm: 120, tatum: computeTatum(120) };
  
  
  const [linesList, setLinesList] = useState(customDefault);
  const [tempo, setTempo] = useState(tempoInfo);
  const [playbackState, setPlaybackState] = useState("Play");
  let synth = new Tone.Synth().toDestination();
  let sequenza = new Tone.Sequence(
        (time, event) => {
            if (event === 1) {
                //synth.sync();
                synth.triggerAttackRelease("C4","32n",time);              
            }
        },
        linesList[0].euclideanArray,
        '16n' );
  

  return (
    <CustomContext.Provider
      value={{ linesList, setLinesList, tempo, setTempo, customDefault, playbackState, setPlaybackState, sequenza}}
    >
      {props.children}
    </CustomContext.Provider>
  );
};

export default CustomContextProvider;
