import PatternControls from "./PatternControls";
import CircleContainer from "./CircleContainer";
import OtherControls from "./OtherControls";
import Dropdown from "react-dropdown";
import { useState } from "react";
import "./../../../../node_modules/react-dropdown/style.css"
import EuclideanLine from "../../../EuclideanLine";
import PatternDropDown from "./PatternDropDown";





const PatternControlsList = ({
  linesList,
  setLinesList,
  envDefaultLinesList,
  setTempo,
  tempo,
  channelList,
  mode,
  colors,
  patternArrayList,
  envDefaultPatterns
}) => {
  
  const elementoBase = {
    height: "17rem",
  };

  const [patternNames, setPatternNames] = useState(envDefaultPatterns.map(pattern => pattern.name));






 


  return (
    <div className="pattern-controls-list">
      {linesList.map((line, id) => {
        const color = colors[id];
        console.log("Mi interessa qui:")
        console.log(channelList[id].solo);
        return (
        <div key={id} className="elemento-base" style={elementoBase}>
          <CircleContainer lineIndex={id} tempo={tempo} setTempo={setTempo} pattern={patternArrayList[id]}/>
x
          {mode && (
            <PatternControls
              setTempo={setTempo}
              tempo={tempo}
              idx={id}
              line={line}
              setLinesList={setLinesList}
              linesList={linesList}
              envDefaultLinesList={envDefaultLinesList}
              color={color}
            />
          )}
          <OtherControls channel={channelList[id]} tempo={tempo} setTempo={setTempo} index={id} color={color} mode={mode}/>
          
          <PatternDropDown id ={id} patternNames={patternNames} defaultPatterns={envDefaultPatterns} linesList={linesList} setLinesList={setLinesList}/>
          
        </div>
      )})}
    </div>
  );
};

export default PatternControlsList;
