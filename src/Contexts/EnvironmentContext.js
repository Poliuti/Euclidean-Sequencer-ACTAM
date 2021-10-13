import React, { createContext, useEffect, useState } from "react";
import { samplerList, channelList, numInstr } from "./../Default/audioChainInitialization";
import creaSequenceList from "./../Functions/CreaSequenceList";
import defaultLines from "../Default/defaultLines";
import { context, Transport } from "tone";
import initEnvironmentInfo from "../Functions/initEnvironmentInfo";
import initializeToneSwing from "../Functions/initializeToneSwing";

// INFO ABOUT THE VARIOUS LISTS:
// LinesList è la lista di N EuclideanLine Objects
// euclideanArrayList is the list of just the euclidean arrays
// sequenceList is the list of all the Sequence Objects (Tone Objects) that have been created



export const EnvironmentContext = createContext();

const EnvironmentContextProvider = (props) => {  // this context provides common info within the environment







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
  const [currentTransportState, setCurrentTransportState] = useState(0); //needed for starting the sequence in the right way when modifying some sliders


  useEffect(() => {
    //runs every time we change environment
   
    initializeToneSwing();


    
   
    if (context.state !== "suspended") {
     
      Transport.stop();
      

      if (linesList) {
        setLinesList(defaultLines[props.name][1]);
      }

      setTempo(tempoInfo);
   

    }
  }, [props.name]);

  const [tempo, setTempo] = useState(tempoInfo); // memorizing tempo object in a state

  const [dummy, setDummy] = useState(0); //dummy variable to trigger re-render in certain cases


  let euclideanPatternsList = linesList.map(
    // creating a List of just euclidean patterns from linesList
    (line, id) => line.euclideanArray
  );



   let sequencesList = creaSequenceList( //creating a list of Tone.Sequence from each Euclidean Pattern
    euclideanPatternsList,
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
        sequencesList,
        euclideanPatternsList,
        channelList: channelList[props.num],
        initialPositionArray: initPosArray,
        dummy,
        setDummy,
        currentTransportState,
        setCurrentTransportState,
        chosenNotes,
        setChosenNotes,
        name : props.name
        
      }}
    >
      {props.children}
    </EnvironmentContext.Provider>
  );
};

export default EnvironmentContextProvider;