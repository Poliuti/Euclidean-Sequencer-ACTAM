import React, { useContext, useEffect, useState } from "react";

import * as Tone from "tone";
import { Transport } from "tone";
import Dropdown from "react-dropdown";
import "./../../../node_modules/react-dropdown/style.css";
import colora from "./../../Functions/colora";
import startSequences from "./../../Functions/startSequences";
import onSequenceListChange from "./../../Functions/onSequenceListChange";
import initializePatternArray from "./../../Functions/initializePatternArray";
import { activeColor, macroColor } from "./../../Default/colori";

import { EnvironmentContext } from "./../../Contexts/EnvironmentContext";
import TempoControls from "./TempoControls/TempoControls";
import MacroControls from "./MacroControls/MacroControls";
import PatternControlsList from "./PatternControls/PatternControlsList";

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
  } = useContext(EnvironmentContext);

  useEffect(() => {
    Transport.stop();
  }, []);

  useEffect(() => {
    Transport.bpm.value = tempo.bpm;
    Transport.swing = 0;
    Transport.swingSubdivision = "8n";
  }, [tempo]);

  const [patternName, setPatternName] = useState(envDefault[0][0].name);

  useEffect(() => {
    onSequenceListChange(sequenceList, patternArrayList);

    return () => {
      sequenceList.forEach((seq) => {
        seq.stop();
        seq.dispose();
      });
    };
  }, [sequenceList]);

  const handleStopClick = () => {
    Tone.Transport.stop();

    sequenceList.forEach((seq, index) => {
      seq.stop();
    });

    let dumDummy = dummy + 1;
    setDummy(dumDummy);

    patternArrayList.forEach((line, ind) => {
      colora(line, ind);
    });
  };

  const handleContextResumeClick = () => {
    if (Tone.context.state === "suspended") {
      Tone.context.resume();
      startSequences(sequenceList);
    } else {
      startSequences(sequenceList);
    }
  };

  const removeClass = (classToRemove, searchClass) => {
    let $domElements = document.getElementsByClassName(searchClass);
    for (let item of $domElements) {
      item.classList.remove(classToRemove);
    }
  };
  const changeMode = () => {
    setMode(!mode);
    removeClass("tempInactive", "dot");
    Tone.Transport.stop();
  };

  const handleOnChange = (string, linesList) => {
    Transport.stop();
    let chosenPattern;
    linesList.forEach((line, idx) => {
      if (line.name === string) {
        chosenPattern = line;
        let chosenPatternExt = initializePatternArray(chosenPattern, 4);
        setSelectedPattern(chosenPatternExt);
        removeClass("tempInactive", "dot");
        setPatternName(string);
      }
    });

    Transport.start("+0.1");
  };

  let dropDownOptions = envDefault[0].map((line) => {
    let name;
    if (line.name !== undefined) {
      name = line.name;
    } else return "noNameForNow";
    return name;
  });

  return (
    <div className="euclidean-sequencer">
      <div className="General-Controls">
      <h2>Tempo Controls</h2>
      <h2>Macro Controls</h2>
      <TempoControls tempo={tempo} setTempo={setTempo} color={macroColor} />
      <MacroControls color={macroColor} />
      </div>
      <div className="main-buttons-container">
        <button onClick={handleStopClick} className="stop"></button>
        <button
          onClick={handleContextResumeClick}
          className="start-context"
        ></button>
        <button onClick={changeMode} className="changeMode"></button>
      </div>

      {!mode && (
        <div className="dropDown">
          <h2>Chosen Pattern : {patternName}</h2>
          <Dropdown
            options={dropDownOptions}
            onChange={(e) => handleOnChange(e.value, envDefault[0])}
            value={dropDownOptions[0]}
            placeholder="Select a Euclidean Pattern"
          />
        </div>
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
      />
    </div>
  );
};

export default EuclideanSequencer;
