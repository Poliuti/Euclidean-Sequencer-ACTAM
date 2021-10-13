import React, { useContext, useEffect, useState} from "react";
import { context, Transport } from "tone";
import onSequenceListChange from "./../../Functions/onSequenceListChange";
import { activeColor, macroColor } from "./../../Default/colori";
import { EnvironmentContext } from "./../../Contexts/EnvironmentContext";
import TempoControls from "./TempoControls/TempoControls";
import MacroControls from "./MacroControls/MacroControls";
import PatternControlsList from "./PatternControls/PatternControlsList";
import PlayButton from "./TransportControls/PlayButton";
import StopButton from "./TransportControls/StopButton";
import api from "./../../api/userLinesList"
import SaveButton from "./../SequencerElements/SaveButton"
import LoadDropDown from "./LoadDropDown";
import defaultLines from "../../Default/defaultLines";

let customDefaultPatterns =  Object.keys(defaultLines).map((key) => //retrieving all the traditional pattterns from all around the world for custom environment
defaultLines[key][0]
).flat().sort((a, b) => {return a.numSteps - b.numSteps});


const EuclideanSequencer = () => {
  const {
    linesList,
    setLinesList,
    tempo,
    setTempo,
    envDefault,
    sequencesList,
    channelList,
    dummy,
    setDummy,
    euclideanPatternsList,
    currentTransportState,
    setCurrentTransportState,
    name
  } = useContext(EnvironmentContext);

  
 
  

  const retrieveUserLinesList = async () => {  // function that returns the response object from the db.json where we save the user pattern
    const response = await api.get("/userLinesList");
    return response.data;
  }




  useEffect(() => { // on first render we retrieve the user LinesList from thedb.json
    Transport.stop();
    
    const getAllUserLinesList = async () => {
      const allUserLinesList = await retrieveUserLinesList();
      if (allUserLinesList) setUserList(allUserLinesList)
      return allUserLinesList;
    }
    getAllUserLinesList();

  }, []);

  const [userList, setUserList] = useState(null); 




  useEffect(() => { 
    Transport.bpm.value = tempo.bpm;
  }, [tempo]);

  
  useEffect(() => { //what to do after every sequences update
    if (context.state === "running") {
      onSequenceListChange(sequencesList, euclideanPatternsList, currentTransportState);

      return () => {
        sequencesList.forEach((seq) => {
          seq.stop();
          seq.dispose();
        });

      };
    }
  }, [sequencesList]);




  let envDefaultPatterns;

  if (name === "custom"){envDefaultPatterns = customDefaultPatterns }
  else {envDefaultPatterns = envDefault[0]}



  


  return (
    <div className="euclidean-sequencer">
      <div className="General-Controls">
        <h2>Tempo Controls</h2>
        <TempoControls tempo={tempo} setTempo={setTempo} color={macroColor} />
        <div className="main-buttons-container">
        <StopButton
          sequenceList={sequencesList}
          dummy={dummy}
          setDummy={setDummy}
          euclideanPatternsList={euclideanPatternsList}
          setCurrentTransportState={setCurrentTransportState}
        />
        <PlayButton sequencesList={sequencesList} />
        <SaveButton actualLinesList={linesList} userList={userList} setUserList={setUserList} />
        </div>
        <h2 id="macroControls">Macro Controls</h2>
        <MacroControls color={macroColor} />
      </div>

      <LoadDropDown className="LoadDropDown" userList={userList} setLinesList={setLinesList} linesList={linesList}/> 


      <PatternControlsList
        linesList={linesList}
        setLinesList={setLinesList}
        envDefaultLinesList={envDefault[1]}
        tempo={tempo}
        setTempo={setTempo}
        channelList={channelList}
        colors={activeColor}
        euclideanPatternsList={euclideanPatternsList}
        envDefaultPatterns={envDefaultPatterns}
      />
    </div>
  );
};

export default EuclideanSequencer;
