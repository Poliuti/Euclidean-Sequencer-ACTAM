import PatternControls from "./PatternControls";
import CircleContainer from "./../CircleContainer";
import ChannelControls from "./ChannelControls";

const PatternControlsList = ({
  linesList,
  setLinesList,
  envDefault,
  synth,
  setTempo,
  tempo,
  sequenceList,
  channelList,
  context,
  setInitialPositionArray,
  actualNoteArray,
  setActualNoteArray
}) => {
  console.log("tempo in patternControlList : ");
  console.log(tempo);
  return (
    <div className="pattern-controls-list">
      {linesList.map((line, id) => (
        <div key={id} className="elemento-base">
          <CircleContainer
            lineIndex={id}
            setLinesList={setLinesList}
            linesList={linesList}
            tempo={tempo}
            setTempo={setTempo}
            context={context}
            sequenceList = {sequenceList}
            actualNoteArray={actualNoteArray}
            setActualNoteArray={setActualNoteArray}
          />
          <PatternControls
            synth={synth}
            setTempo={setTempo}
            tempo={tempo}
            idx={id}
            sequenceList={sequenceList}
            line={line}
            setLinesList={setLinesList}
            linesList={linesList}
            envDefault={envDefault}
            setInitialPositionArray={setInitialPositionArray}
            
          />
          <ChannelControls channel={channelList[id]} />
        </div>
      ))}
    </div>
  );
};

export default PatternControlsList;
