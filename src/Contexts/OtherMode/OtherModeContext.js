import React, { createContext, useState } from "react";
import creaSequence from "../../CreaSequence";
import {samplerList, channelList} from "../../sampler";


import otherModeDefault from "./otherModeDefault";



// INFO ABOUT THE VARIOUS LISTS:
// linesList is the list of all the info contained in the line object
// euclideanArrayList is the list of just the eeuclidean arrays
// sequenceList is the list of all the Sequence Objects (Tone Objects) that have been created



export const OtherModeContext = createContext();

const OtherModeContextProvider = (props) => { // this context provides common info within the OtherMode environments
  
  console.log("Context ran");
  const [patternChoice, setPatternChoice] = useState(0);

  let chosenPattern = patternChoice;

  let tempoInfo = { bpm: 120, tempoSpeedIndex: 1, tatum : 250}; //Informazioni riguardanti bpm (comune) e modificatori di tempo (per ogni linea)
  let noteArray = ["A1", "C2", "E2", "G2"]; // info sulle note che suona ogni sequenza (mi serve quando creo la sequenza)


  let initPos = 0;

  const [tempo, setTempo] = useState(tempoInfo); // memorizzo tempo information in uno stato
  const [dummy, setDummy] = useState(0);
  const [actualNoteArray, setActualNoteArray] = useState(noteArray);

  let listaIniziale;
  /* let initialPositionArray = [0, 0, 0, 0]; */ // dovrebbe tenere d'occhio la posizione del tick  all'internodi ogni linea (PER ORA NON FUNZIA BENE)

  let noteSpeedArray = // info su playback rate di ogni sequenza (mi serve quando creo la sequenza)
    `${8 * tempo.tempoSpeedIndex}n`;
 

  // 1 Tick in secondi = tatum
  // current Tick Index : parametri sono --> 1) Transport.getSecondsAtTime    2)BPM   3)SpeedModifier 4) N° of Steps of the line
  // Gli ultimi due parametri sono disponibili in tempoInfo
  // 




  let { initialList: sequenceList, currentPos: position } = // chiamo la funzione creaSequenceList e assegno i due valori di ritorno a due variabili
    creaSequence(
      chosenPattern,
      listaIniziale,
      actualNoteArray,
      noteSpeedArray,
      samplerList[0],
      initPos
      
    );

 


  const euclideanArray = chosenPattern.euclideanArray;




  return (
    <OtherModeContext.Provider
      value={{
        patternChoice,
        setPatternChoice,
        tempo,
        setTempo,
        envDefault : otherModeDefault,
        sequenceList,
        euclideanArray,
        position,
        channelList : channelList[0], 
        initialPosition : initPos,
        dummy,
        setDummy,
        actualNoteArray,
        setActualNoteArray
        
        
      }}
    >
      {props.children}
    </OtherModeContext.Provider>
  );
};

export default OtherModeContextProvider;
