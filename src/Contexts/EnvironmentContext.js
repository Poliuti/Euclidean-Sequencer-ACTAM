import React, { createContext, useEffect, useState } from "react";
import { samplerList, channelList, numInstr } from "./../Default/sampler";
import creaSequenceList from "./../Functions/CreaSequenceList";
import defaultLines from "../Default/defaultLines";
import { context, Transport } from "tone";
import initEnvironmentInfo from "../Functions/initEnvironmentInfo";

// INFO ABOUT THE VARIOUS LISTS:
// LinesList è la lista di N EuclideanLine Objects
// euclideanArrayList is the list of just the euclidean arrays
// sequenceList is the list of all the Sequence Objects (Tone Objects) that have been created

export const EnvironmentContext = createContext();

const EnvironmentContextProvider = (props) => {
  // this context provides common info within the environment
console.log(numInstr[props.num]);


  const [currentTransportState, setCurrentTransportState] = useState(0); //needed for starting the sequence in the right way when modifying some sliders

  console.log("Context ran");

  const { tempoInfo, noteArray, initPosArray } = initEnvironmentInfo(
    numInstr[props.num],
    140
  ); //initializing Tempo Object, note array that the samplers will play, initial Tick Position for the sequences


  useEffect(() => {
    return () => {
      //On Environment UnMount, i set all mutes and solos to false
      channelList[props.num].forEach((channel) => {
        channel.solo = false;
        channel.mute = false;
      });
    };
  }, []);

  const [linesList, setLinesList] = useState(defaultLines[props.name][1]); // Saving EuclideanLines List in a state (initially linesList comes from a default list of lines, one for each Environment)
  const [chosenNotes, setChosenNotes] = useState(noteArray); //saving the note Array that will be read from the samplers

  useEffect(() => {
    //runs every time we change environment
    if (context.state !== "suspended") {
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
    }
  }, [props.name]);

  const [tempo, setTempo] = useState(tempoInfo); // memorizing tempo object in a state

  const [dummy, setDummy] = useState(0);

  let sequencesList = []; //inizializzo la lista iniziale delle sequenze come vuota

  let patternArrayList = linesList.map(
    // creating a List of just euclidean patterns from linesList
    (line, id) => line.euclideanArray
  );

  let sequenceList = creaSequenceList( //creating a list of Tone.Sequence from each Eucldean Pattern
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
        setChosenNotes,
      }}
    >
      {props.children}
    </EnvironmentContext.Provider>
  );
};

export default EnvironmentContextProvider;
