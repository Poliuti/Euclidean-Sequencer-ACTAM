import React, { useContext, useEffect, useState} from "react";
import { context, Transport } from "tone";
import { activeColor, macroColor } from "./../../Default/colori";
import { EnvironmentContext } from "./../../Contexts/EnvironmentContext";
import TempoControls from "./TempoControls/TempoControls";
import MacroControls from "./MacroControls/MacroControls";
import EuclideanLineControlsList from "./EuclideanLineControls/EuclideanLineControlsList";
import PlayButton from "./TransportControls/PlayButton";
import StopButton from "./TransportControls/StopButton";
import api from "./../../api/userUnitList"
import SaveButton from "./../SequencerElements/SaveButton"
import LoadDropDown from "./LoadDropDown";
import defaultUnits from "../../Default/defaultUnits";

let customDefaultUnits =  Object.keys(defaultUnits).map((environment) => //retrieving all the traditional patterns from all around the world for custom environment
defaultUnits[environment].traditional
).flat().sort((a, b) => {return a.numSteps - b.numSteps});


const EuclideanSequencer = () => {
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

  
  const retrieveUnitxList = async () => {  // function that returns the response object from the db.json where we save the user pattern
    const response = await api.get("/userUnitList");
    return response.data;
  }





  useEffect(() => { // on first render we retrieve the user UnitList from thedb.json
    Transport.stop();
    
    const getAllUserUnitList = async () => {
      const allUserUnitList = await retrieveUnitxList();
      if (allUserUnitList) setUserList(allUserUnitList)
      return allUserUnitList;
    }
    getAllUserUnitList();

  }, []);

  const [userList, setUserList] = useState(null); 



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
        <SaveButton currentUnitList={unitList} userList={userList} setUserList={setUserList} tempo={tempo} setTempo = {setTempo}/>
        </div>
        <h2 id="macroControls">Macro Controls</h2>
        <MacroControls color={macroColor} />
      </div>

      <LoadDropDown className="LoadDropDown" userList={userList} setUnitList={setUnitList} setTempo = {setTempo}/> 


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
