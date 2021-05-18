import PatternControls from "./PatternControls";
import ResetButton from "./ResetButton";

const PatternControlsList = ({ linesList, setLinesList, customDefault }) => {
  return (
    <div className="pattern-controls-list">
      <ResetButton setLinesList={setLinesList} customDefault={customDefault} />
      {linesList.map((line, id) => (
        <div key={id}>
          <PatternControls
            idx={id}
            line={line}
            setLinesList={setLinesList}
            linesList={linesList}
            customDefault={customDefault}
          />
        </div>
      ))}
    </div>
  );
};

export default PatternControlsList;
