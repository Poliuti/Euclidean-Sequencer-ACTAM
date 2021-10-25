import React, { createContext, useEffect, useState } from "react";
import { samplerList, channelList, numInstr } from "./../Default/audioChainInitialization";
import creaSequenceList from "./../Functions/CreaSequenceList";
import defaultUnits from "../Default/defaultUnits";
import { context, Transport } from "tone";
import initEnvironmentInfo from "../Functions/initEnvironmentInfo";
import initializeToneSwing from "../Functions/initializeToneSwing";
import colora from "../Functions/colora";

// INFO ABOUT THE VARIOUS LISTS:
// unitList è la lista di N EuclideanUnit Objects
// euclideanArrayList is the list of just the euclidean arrays
// sequenceList is the list of all the Sequence Objects (Tone Objects) that have been created



export const EnvironmentContext = createContext();

const EnvironmentContextProvider = (props) => {  // this context provides common info within the environment

  console.log("environment run")

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

  const [unitList, setUnitList] = useState(defaultUnits[props.name].init);       // Saving EuclideanUnit List in a state (initially unitList comes from a default list of units, one for each Environment)
  
  const [tempo, setTempo] = useState(tempoInfo);                                    // memorizing tempo object in a state
  
  
  const [currentTransportState, setCurrentTransportState] = useState(0);            //needed for starting the sequence in the right way when modifying some sliders
  const [chosenNotes, setChosenNotes] = useState(noteArray);                        //saving the note Array that will be read from the samplers

  useEffect(() => {
    //runs every time we change environment
   
    initializeToneSwing();


    
   
    if (context.state !== "suspended") {
     
      Transport.stop();
      

      if (unitList) {
        setUnitList(defaultUnits[props.name].init);
      }

      setTempo(tempoInfo);
   

    }
  }, [props.name]);

  useEffect(() => {
    let setIntervalID = setInterval(() => {
      euclideanPatternsList.forEach((pattern, ind) => {
        colora(pattern, ind);
      })
    }, 200);
    
  
    return () => clearInterval(setIntervalID);
  }, [unitList])

  

  const [dummy, setDummy] = useState(0); //dummy variable to trigger re-render in certain cases



  let euclideanPatternsList = unitList.map(
    // creating a List of just euclidean patterns from unitList
    (unit) => unit.euclideanArray
  );



   let sequencesList = creaSequenceList( //creating a list of Tone.Sequence from each Euclidean Pattern
    euclideanPatternsList,
    chosenNotes,
    tempo.stepDurationArray,
    samplerList[props.num],
    initPosArray,
    channelList[props.num]
  );

    


  

  return (
    <EnvironmentContext.Provider
      value={{
        unitList,
        setUnitList,
        tempo,
        setTempo,
        envDefault: defaultUnits[props.name],
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