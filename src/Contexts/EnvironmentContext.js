import React, { createContext, useEffect, useState } from "react";
import { samplerList, channelList } from "./../Default/sampler";
import creaSequenceList from "./../Functions/CreaSequenceList";
import defaultLines from "../Default/defaultLines";
import { Transport } from "tone";

// INFO ABOUT THE VARIOUS LISTS:
// linesList is the list of all the info contained in the line object
// euclideanArrayList is the list of just the euclidean arrays
// sequenceList is the list of all the Sequence Objects (Tone Objects) that have been created

export const EnvironmentContext = createContext();
const allNotesArray = ["A-2", "B-2", "C-2", "D-2", "E-2", "F-2", "G-2","A-1", "B-1", "C-1", "D-1", "E-1", "F-1", "G-1", "A0", "B0", "C0", "D0", "E0", "F0", "G0", "A1", "B1", "C1", "D1", "E1", "F1", "G1", "A2", "B2", "C2", "D2", "E2", "F2", "G2", "A3", "B3", "C3", "D3","E3", "F3", "G3"]
const noteArray = ["A1", "A1", "A1", "A1"]; // info sulle note che suona ogni sequenza (mi serve quando creo la sequenza)


const EnvironmentContextProvider = (props) => {
  // this context provides common info within the environment

  const [currentTransportState, setCurrentTransportState] = useState(0);

  console.log("Context ran");

  const tempoSpeedIndex = samplerList[props.num].map(() => 1);
  const tempoSpeedIndexForTone = tempoSpeedIndex.map(
    (coeff) => `${coeff * 8}n`
  );


  const tempoInfo = {
    bpm: 140,
    tempoSpeedIndex: tempoSpeedIndex,
    tempoSpeedIndexForTone: tempoSpeedIndexForTone,
  };

  const initPosArray = [0, 0, 0, 0];
  //ogni render del context viene azzerata la posizione del tick
  /*  const [userLinesList, setUserLinesList] = useState([]);  */

  const [linesList, setLinesList] = useState(defaultLines[props.name][1]); // memorizzo la lista di linee euclidiane in uno stato
  const [chosenNotes, setChosenNotes] = useState(noteArray);

  useEffect(() => {
    return () => {
      channelList[props.num].forEach((channel) => {
        channel.solo = false;
        channel.mute = false;
      });
    };
  }, []);

  useEffect(() => {
    let wasPlaying;
    if (Transport.state === "started") {
      wasPlaying = true;
    } else {
      wasPlaying = false;
    }

    Transport.stop();
    if (linesList) {
      setLinesList(defaultLines[props.name][1]);
    }
    setTempo(tempoInfo);
    if (wasPlaying) {
      Transport.start("+0.05");
    }
  }, [props.name]);

  const [tempo, setTempo] = useState(tempoInfo); // memorizzo tempo information in uno stato

  const [dummy, setDummy] = useState(0);

  let sequencesList = []; //inizializzo la lista iniziale delle sequenze come vuota

  // 1 Tick in secondi = tatum
  // current Tick Index : parametri sono --> 1) Transport.getSecondsAtTime    2)BPM   3)SpeedModifier 4) N° of Steps of the line
  // Gli ultimi due parametri sono disponibili in tempoInfo
  //
  let patternArrayList = linesList.map(
    (
      line,
      id // creo una lista di Euclidean Arrays chiamata euclideanArrayList
    ) => line.euclideanArray
  );

  let sequenceList =
    // chiamo la funzione creaSequenceList e assegno i due valori di ritorno a due variabili
    creaSequenceList(
      patternArrayList,
      sequencesList,
      chosenNotes,
      tempo.tempoSpeedIndexForTone,
      samplerList[props.num],
      initPosArray,
      channelList[props.num]
    );

  return (
    <EnvironmentContext.Provider
      value={{
        linesList,
        setLinesList,
        tempo,
        setTempo,
        envDefault: defaultLines[props.name],
        sequenceList,
        patternArrayList,
        channelList: channelList[props.num],
        initialPositionArray: initPosArray,
        dummy,
        setDummy,
        currentTransportState,
        setCurrentTransportState,
        chosenNotes,
        setChosenNotes
      }}
    >
      {props.children}
    </EnvironmentContext.Provider>
  );
};

export default EnvironmentContextProvider;
