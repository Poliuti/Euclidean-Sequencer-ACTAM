import PatternControls from "./PatternControls";
import CircleContainer from "./CircleContainer";
import OtherControls from "./OtherControls";




const PatternControlsList = ({
  linesList,
  setLinesList,
  envDefault,
  setTempo,
  tempo,
  channelList,
  mode,
  colors,
  patternArrayList
}) => {
  const elementoBase = {
    height: "17rem",
  };

  return (
    <div className="pattern-controls-list">
      {linesList.map((line, id) => {
        const color = colors[id];
        console.log("Mi interessa qui:")
        console.log(channelList[id].solo);
        return (
        <div key={id} className="elemento-base" style={elementoBase}>
          <CircleContainer lineIndex={id} tempo={tempo} setTempo={setTempo} pattern={patternArrayList[id]}/>

          {mode && (
            <PatternControls
              setTempo={setTempo}
              tempo={tempo}
              idx={id}
              line={line}
              setLinesList={setLinesList}
              linesList={linesList}
              envDefault={envDefault}
              color={color}
            />
          )}
          <OtherControls channel={channelList[id]} tempo={tempo} setTempo={setTempo} index={id} color={color} mode={mode}/>
          
          
        </div>
      )})}
    </div>
  );
};

export default PatternControlsList;
