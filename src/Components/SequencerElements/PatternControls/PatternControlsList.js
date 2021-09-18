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
  colors
}) => {
  const elementoBase = {
    height: "17rem",
  };

  return (
    <div className="pattern-controls-list">
      {linesList.map((line, id) => {
        const color = colors[id];
        return (
        <div key={id} className="elemento-base" style={elementoBase}>
          <CircleContainer lineIndex={id} tempo={tempo} setTempo={setTempo} />

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
          <OtherControls channel={channelList[id]} tempo={tempo} setTempo={setTempo} index={id} color={color}/>
          
          
        </div>
      )})}
    </div>
  );
};

export default PatternControlsList;
