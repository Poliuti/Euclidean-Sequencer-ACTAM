import React, { useContext, useEffect } from "react";
import TempoControls from "./Controls/TempoControls";
import PatternControlsList from "./Controls/PatternControlsList";
import * as Tone from "tone";
import {Transport } from "tone";
import Dropdown from "react-dropdown";
import "/Users/Progetti Programmazione/Visual Studio Code/React/actamproject/node_modules/react-dropdown/style.css";
import MacroControls from "./Controls/MacroControls";
import creaSequenceList from "./CreaSequenceList";
import colora from "./Controls/colora";


const EuclideanSequencer = ({ context }) => {
  
  const {
    linesList,
    setLinesList,
    tempo,
    setTempo,
    envDefault,
    synth,
    sequenceList,
    channelList,
    initialPositionArray,
    setInitialPositionArray,
    dummy,
    setDummy,
    actualNoteArray,
    setActualNoteArray
    
  } = useContext(context);

  console.log("Euclidean Sequencer re-rendered");
  console.log(initialPositionArray);

  useEffect(() => {
    console.log("UseEffect 1");
    
    
    sequenceList.forEach((seq, index) => {
      seq.start("0:0:0");}
    )

    linesList.forEach((line, ind)=>{
      colora(linesList[ind].euclideanArray, ind);
    
    })

    Transport.scheduleOnce(() => {
      linesList.forEach((line, ind)=>{
      colora(linesList[ind].euclideanArray, ind);
    
    })
    }, "+0.5");
              

            
    
    

    /* Tone.Transport.start("+1"); */

    return () => {
      console.log("UseEffect Return");
      sequenceList.forEach((seq, index) => {
        seq.stop();
        seq.clear();
      });
      
    };
  }, [sequenceList[0], sequenceList[1], sequenceList[2], sequenceList[3]]);

  console.log("Nel corpo di Euclidean Sequencer : ");
  /* console.log(sequenceList); */

  const handleStopClick = () => {
    Tone.Transport.stop();
    
    sequenceList.forEach((seq, index) => {
      //DA RIMETTERE!!

      seq.stop();
      
      
    });

    let dumDummy = dummy + 1;
    setDummy(dumDummy);

    /* setInitialPositionArray([0,0,0,0]); */
    

    linesList.forEach((line, ind)=>{
      colora(linesList[ind].euclideanArray, ind);
    
    })
    console.log(linesList);
    

  };

  const handleContextResumeClick = () => {
    console.log(Tone.context.state);

    if (Tone.context.state === "suspended") {
      Tone.context.resume();
    } else {
      sequenceList.forEach((seq, index) => {
        //DA RIMETTERE!!
        seq.start("0:0:0");
      });


      Tone.Transport.start("+0.1");
      
    }
  };

  return (
    <div className="euclidean-sequencer">
      <TempoControls tempo={tempo} setTempo={setTempo} />
      <MacroControls />
      <PatternControlsList
        linesList={linesList}
        setLinesList={setLinesList}
        envDefault={envDefault}
        sequenceList={sequenceList}
        synth={synth}
        tempo={tempo}
        setTempo={setTempo}
        channelList={channelList}
        context={context}
        setInitialPositionArray ={setInitialPositionArray}
        actualNoteArray={actualNoteArray}
        setActualNoteArray={setActualNoteArray}
      />

      <Dropdown
        options={["A", "B", "C"]}
        onChange={console.log("changed")}
        value={"A"}
        placeholder="Select an option"
      />

      <button onClick={handleStopClick} className="stop">
        Stop
      </button>
      <button onClick={handleContextResumeClick} className="start-context">
        Play
      </button>
    </div>
  );
};

export default EuclideanSequencer;
