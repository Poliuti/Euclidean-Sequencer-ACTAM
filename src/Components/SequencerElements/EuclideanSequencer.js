import React, { useContext, useEffect, useState} from "react";
import { context, Transport } from "tone";
import { activeColor, macroColor } from "./../../Default/colori";
import { EnvironmentContext } from "./../../Contexts/EnvironmentContext";
import TempoControls from "./TempoControls/TempoControls";
import MacroControls from "./MacroControls/MacroControls";
import EuclideanLineControlsList from "./EuclideanLineControls/EuclideanLineControlsList";
import PlayButton from "./TransportControls/PlayButton";
import StopButton from "./TransportControls/StopButton";
import SaveButton from "./../SequencerElements/SaveButton"
import LoadDropDown from "./LoadDropDown";
import defaultUnits from "../../Default/defaultUnits";

let customDefaultUnits =  Object.keys(defaultUnits).map((environment) => //retrieving all the traditional patterns from all around the world for custom environment
defaultUnits[environment].traditional
).flat().sort((a, b) => {return a.numSteps - b.numSteps});


const EuclideanSequencer = ({userPresets, setUserPresets}) => {
  const {
    unitList,
    setUnitList,
    tempo,
    setTempo,
    envDefault,
    sequencesList,
    channelList,
    dummy,
    setDummy,
    euclideanPatternsList,
    currentTransportState,
    name
  } = useContext(EnvironmentContext);

  
  





  useEffect(() => { 
    Transport.stop();
    
    const getAllUserPresets =  () => {
      const allUserPresets = userPresets;
      if (allUserPresets) setUserPresets(allUserPresets)
      return allUserPresets;
    }
    getAllUserPresets();

  }, []);

  



  useEffect(() => { 
    Transport.bpm.value = tempo.bpm;
  }, [tempo]);

  
  useEffect(() => { //what to do after every sequences update
    if (context.state === "running") {
    

      if (currentTransportState) {
    
        sequencesList.forEach((seq) => {
          seq.start("+0.1");
        });
        
      }

      return () => {
        sequencesList.forEach((seq) => {
          seq.stop();
          seq.dispose();
        });

      };
    }
  }, [sequencesList]);




  let envDefaultUnits;

  if (name === "custom"){envDefaultUnits = customDefaultUnits }
  else {envDefaultUnits = envDefault.traditional}



  


  return (
    <div className="euclidean-sequencer">
      <div className="General-Controls">
        <h2>Tempo Controls</h2>
        <TempoControls tempo={tempo} setTempo={setTempo} color={macroColor} />
        <div className="main-buttons-container">
        <StopButton
          sequencesList={sequencesList}
          dummy={dummy}
          setDummy={setDummy}
        />
        <PlayButton sequencesList={sequencesList} dummy={dummy}
          setDummy={setDummy}/>
        <SaveButton currentUnitList={unitList} userPresets={userPresets} setUserPresets={setUserPresets} tempo={tempo} setTempo = {setTempo}/>
        </div>
        <h2 id="macroControls">Macro Controls</h2>
        <MacroControls color={macroColor} />
      </div>

      <LoadDropDown className="LoadDropDown" userPresets={userPresets} setUnitList={setUnitList} setTempo = {setTempo}/> 


      <EuclideanLineControlsList
        unitList={unitList}
        setUnitList={setUnitList}
        tempo={tempo}
        setTempo={setTempo}
        channelList={channelList}
        colors={activeColor}
        euclideanPatternsList={euclideanPatternsList}
        envDefaultUnits={envDefaultUnits}
      />
    </div>
  );
};

export default EuclideanSequencer;
