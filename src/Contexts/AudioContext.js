import React, { createContext, useState } from "react";

import * as Tone from "tone";


export const AudioContext = createContext();


// NOT USED FOR NOW

const AudioContextProvider = (props) => {

let synth = new Tone.Synth().toDestination();
  const [sequenza, setSequenza] = useState(
    new Tone.Sequence(
      (time, event) => {
        if (event === 1) {
          synth.sync();
          synth.triggerAttackRelease("C4", "32n", time);
        }
      },
      [1,0,1,0,0,1,0],
      "16n"
    )
  ); 


  return (
    <AudioContext.Provider
      value={{sequenza, setSequenza }}
    >
      {props.children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;

  