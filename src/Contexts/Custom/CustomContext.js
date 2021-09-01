import React, { createContext, useState } from "react";
import {samplerList, channelList} from "./../../sampler";
import customDefault from "./customDefault";
import creaSequenceList from "../../CreaSequenceList";
import colora from "../../Controls/colora";


// INFO ABOUT THE VARIOUS LISTS:
// linesList is the list of all the info contained in the line object
// euclideanArrayList is the list of just the eeuclidean arrays
// sequenceList is the list of all the Sequence Objects (Tone Objects) that have been created



export const CustomContext = createContext();

const CustomContextProvider = (props) => { // this context provides common info within the custom environments
  
  console.log("Context ran");


  let tempoInfo = { bpm: 120, tempoSpeedIndex: [1, 1, 1, 1], tatum : [250, 250, 250, 250]}; //Informazioni riguardanti bpm (comune) e modificatori di tempo (per ogni linea)
  let noteArray = ["A1", "C2", "E2", "G2"]; // info sulle note che suona ogni sequenza (mi serve quando creo la sequenza)


  let initPosArray = [0, 0, 0, 0];
  const [linesList, setLinesList] = useState(customDefault); // memorizzo la lista di linee euclidiane in uno stato
  const [tempo, setTempo] = useState(tempoInfo); // memorizzo tempo information in uno stato
  const [dummy, setDummy] = useState(0);
  const [actualNoteArray, setActualNoteArray] = useState(noteArray);

  let listaIniziale = []; //inizializzo la lista iniziale come vuota
  /* let initialPositionArray = [0, 0, 0, 0]; */ // dovrebbe tenere d'occhio la posizione del tick  all'internodi ogni linea (PER ORA NON FUNZIA BENE)

  let noteSpeedArray = [  // info su playback rate di ogni sequenza (mi serve quando creo la sequenza)
    `${8 * tempo.tempoSpeedIndex[0]}n`,
    `${8 * tempo.tempoSpeedIndex[1]}n`,
    `${8 * tempo.tempoSpeedIndex[2]}n`,
    `${8 * tempo.tempoSpeedIndex[3]}n`,
  ];

  // 1 Tick in secondi = tatum
  // current Tick Index : parametri sono --> 1) Transport.getSecondsAtTime    2)BPM   3)SpeedModifier 4) N° of Steps of the line
  // Gli ultimi due parametri sono disponibili in tempoInfo
  // 

  


  let { initialList: sequenceList, currentPosArr: positionArray } = // chiamo la funzione creaSequenceList e assegno i due valori di ritorno a due variabili
    creaSequenceList(
      linesList,
      listaIniziale,
      actualNoteArray,
      noteSpeedArray,
      samplerList[0],
      initPosArray
      
    );

 
  const euclideanArrayList = []; 

  linesList.map((line, id) => { // creo una lista di Euclidean Arrays chiamata euclideanArrayList
    const { euclideanArray: euclArray } = linesList[id];
    euclideanArrayList.push(euclArray);
  });




  return (
    <CustomContext.Provider
      value={{
        linesList,
        setLinesList,
        tempo,
        setTempo,
        envDefault : customDefault,
        sequenceList,
        euclideanArrayList,
        positionArray,
        channelList : channelList[0], 
        initialPositionArray : initPosArray,
        dummy,
        setDummy,
        actualNoteArray,
        setActualNoteArray
        
        
      }}
    >
      {props.children}
    </CustomContext.Provider>
  );
};

export default CustomContextProvider;
