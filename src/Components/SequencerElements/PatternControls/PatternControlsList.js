import PatternControls from "./PatternControls";
import CircleContainer from "./CircleContainer";
import ChannelControls from "./../ChannelControls/ChannelControls";



const PatternControlsList = ({
  linesList,
  setLinesList,
  envDefault,
  setTempo,
  tempo,
  channelList,
  mode,
}) => {
  const elementoBase = {
    height: "17rem",
  };

  return (
    <div className="pattern-controls-list">
      {linesList.map((line, id) => (
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
            />
          )}
          <ChannelControls channel={channelList[id]} />
        </div>
      ))}
    </div>
  );
};

export default PatternControlsList;
