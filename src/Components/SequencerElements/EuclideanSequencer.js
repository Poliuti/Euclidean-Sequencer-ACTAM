import React, { useContext, useEffect, useState } from "react";
import { Context, context, Transport } from "tone";
import onSequenceListChange from "./../../Functions/onSequenceListChange";
import { activeColor, macroColor } from "./../../Default/colori";
import { EnvironmentContext } from "./../../Contexts/EnvironmentContext";
import TempoControls from "./TempoControls/TempoControls";
import MacroControls from "./MacroControls/MacroControls";
import PatternControlsList from "./PatternControls/PatternControlsList";
import PlayButton from "./TransportControls/PlayButton";
import StopButton from "./TransportControls/StopButton";
import ChangeModeButton from "./OtherFunctionalityControls/ChangeModeButton";
import removeClass from "../../Functions/removeClass";
import DropDownMenu from "./OtherFunctionalityControls/DropDownMenu";
import initializeToneSwing from "../../Functions/initializeToneSwing";
import startSequences from "../../Functions/startSequences";
import colora from "../../Functions/colora";
import useFetch from "../../useFetchGet";
import useFetchPost from "../../useFetchPost";

const EuclideanSequencer =  () => {
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
    mode,
    setMode,
    patternArrayList,
    setSelectedPattern,
    userLinesList,
    setUserLinesList,
    currentTransportState,
    
    
  } = useContext(EnvironmentContext);
  




  

  
  const [patternName, setPatternName] = useState(envDefault[0][0].name);









  useEffect(() => {
    Transport.stop();
    initializeToneSwing();
 

  }, []);







  const handleContextResumeClick = () => {
    if (Context.state === "suspended") {
      Context.resume();
    }
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
  };




  document.body.onkeyup = function (e) {
    console.log(e.code)
    console.log(Transport.state)
    if (e.code === "Space") {
      if (Transport.state === "stopped") {
        handleContextResumeClick();
      }
      else {
       handleStopClick();
      }
    } 

  }
  



  useEffect(() => {
    Transport.bpm.value = tempo.bpm;
  }, [tempo]);

  


  useEffect(() => {

    onSequenceListChange(sequenceList, patternArrayList,currentTransportState );



    return () => {
 
      sequenceList.forEach((seq) => {
        seq.stop();
        seq.dispose();
      });
      console.log(Transport.state);

/*       if (Transport.state === "started")
      Transport.stop(); */
    };
  }, [sequenceList]);

  /* 
  const handleSave = () => {
    const tempUserList = userLinesList;
    tempUserList.push(linesList);
    setUserLinesList(tempUserList);
    console.log(userLinesList);
  } */

  /*   const handleOnPatternLoad = (ev, userLinesList ) => {
    console.log(userLinesList);
 
    let selectedIndexPattern = ev.label.match(/\d+$/)[0];
    console.log(selectedIndexPattern);
    setLinesList(userLinesList[selectedIndexPattern])

  } */

  return (
    <div className="euclidean-sequencer">
      <div className="General-Controls">

      <h2>Tempo Controls</h2>
      <h2 id="macroControls">Macro Controls</h2>
      <TempoControls tempo={tempo} setTempo={setTempo} color={macroColor} />
      <MacroControls color={macroColor} />

      </div>

      <div className="main-buttons-container">
      <StopButton
          sequenceList={sequenceList}
          dummy={dummy}
          setDummy={setDummy}
          patternArrayList={patternArrayList}
        />
        <PlayButton sequenceList={sequenceList} />
        <ChangeModeButton
          mode={mode}
          setMode={setMode}
          removeClass={removeClass}
        />
      </div>

      {/*       <Dropdown
            options={userLinesList.map((line, ind) => `User Pattern ${ind}`)}
            onChange={(e) => handleOnPatternLoad(e, userLinesList)}
            value={[]}
            placeholder="Select a Euclidean Pattern"
          /> */}

      {!mode && (
        <DropDownMenu
          defaultEnvInfo={envDefault[0]}
          setSelectedPattern={setSelectedPattern}
          patternName={patternName}
          setPatternName={setPatternName}
        />
      )}

      <PatternControlsList
        linesList={linesList}
        setLinesList={setLinesList}
        envDefault={envDefault[1]}
        tempo={tempo}
        setTempo={setTempo}
        channelList={channelList}
        mode={mode}
        colors={activeColor}
        patternArrayList={patternArrayList}
      />
    </div>
  );
};

export default EuclideanSequencer;
