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
import initializeToneSwing from "../../Functions/initializeToneSwing";
import startSequences from "../../Functions/startSequences";
import colora from "../../Functions/colora";
import api from "./../../api/userLinesList"
import SaveButton from "./../SequencerElements/SaveButton"
import LoadDropDown from "./LoadDropDown";



const EuclideanSequencer = () => {
  const {
    linesList,
    setLinesList,
    tempo,
    setTempo,
    envDefault,
    sequenceList,
    channelList,
    dummy,
    setDummy,
    patternArrayList,
    currentTransportState,
  } = useContext(EnvironmentContext);

  const [userList, setUserList] = useState(null);
  

  const retrieveUserLinesList = async () => {
    const response = await api.get("/userLinesList");
    return response.data;
  }




  useEffect(() => {
    Transport.stop();
    initializeToneSwing();
    const getAllUserLinesList = async () => {
      const allUserLinesList = await retrieveUserLinesList();
      if (allUserLinesList) setUserList(allUserLinesList)
    }
    getAllUserLinesList();
    
  }, []);


/*   const handleContextResumeClick = () => {
    if (Context.state === "suspended") {
      Context.resume();
    } else {Transport.start()}
    startSequences(sequenceList);
  };


  const handleStopClick = () => {
    Transport.stop();

    sequenceList.forEach((seq, index) => {
      seq.stop();
    });

    let dumDummy = dummy + 1;
    setDummy(dumDummy);

    patternArrayList.forEach((line, ind) => {
      colora(line, ind);
    });
  }; */


/*   document.body.onkeyup = function (e) {
    if (e.code === "Space") {
      if (Transport.state === "stopped") {
        handleContextResumeClick();
      } else {
        handleStopClick();
      }
    }
  }; */

  useEffect(() => {
    Transport.bpm.value = tempo.bpm;
  }, [tempo]);

  useEffect(() => {if (context.state === "running"){
    onSequenceListChange(sequenceList, patternArrayList, currentTransportState);

    return () => {
      sequenceList.forEach((seq) => {
        seq.stop();
        seq.dispose();
      });
      

      /*       if (Transport.state === "started")
      Transport.stop(); */
    };}
  }, [sequenceList]);




  return (
    <div className="euclidean-sequencer">
      <div className="General-Controls">
        <h2>Tempo Controls</h2>
        <TempoControls tempo={tempo} setTempo={setTempo} color={macroColor} />
        <div className="main-buttons-container">
        <StopButton
          sequenceList={sequenceList}
          dummy={dummy}
          setDummy={setDummy}
          patternArrayList={patternArrayList}
        />
        <PlayButton sequenceList={sequenceList} />
        <SaveButton actualLinesList={linesList} userList={userList} setUserList={setUserList} />
        </div>
        <h2 id="macroControls">Macro Controls</h2>
        <MacroControls color={macroColor} />
      </div>

      <LoadDropDown className="LoadDropDown" userList={userList} setLinesList={setLinesList} />


      <PatternControlsList
        linesList={linesList}
        setLinesList={setLinesList}
        envDefaultLinesList={envDefault[1]}
        tempo={tempo}
        setTempo={setTempo}
        channelList={channelList}
        colors={activeColor}
        patternArrayList={patternArrayList}
        envDefaultPatterns={envDefault[0]}
      />
    </div>
  );
};

export default EuclideanSequencer;
