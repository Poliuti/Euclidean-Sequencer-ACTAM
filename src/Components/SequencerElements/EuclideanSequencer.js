import React, { useContext, useEffect, useState } from "react";
import { Transport } from "tone";
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
    mode,
    setMode,
    patternArrayList,
    setSelectedPattern,
    userLinesList,
    setUserLinesList,
  } = useContext(EnvironmentContext);

  const [patternName, setPatternName] = useState(envDefault[0][0].name);

  useEffect(() => {
    Transport.stop();
    initializeToneSwing();
  }, []);



  useEffect(() => {
    Transport.bpm.value = tempo.bpm;
  }, [tempo]);


  useEffect(() => {
    onSequenceListChange(sequenceList, patternArrayList);
    console.log("QUI?")

    return () => {
      console.log("ANCHE QUI")
      sequenceList.forEach((seq) => {
        seq.stop();
        seq.dispose();
      });
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
        <h2>Macro Controls</h2>
        <TempoControls tempo={tempo} setTempo={setTempo} color={macroColor} />
        <MacroControls color={macroColor} />
      </div>

      <div className="main-buttons-container">
        <PlayButton sequenceList={sequenceList} />
        <StopButton
          sequenceList={sequenceList}
          dummy={dummy}
          setDummy={setDummy}
          patternArrayList={patternArrayList}
        />
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
