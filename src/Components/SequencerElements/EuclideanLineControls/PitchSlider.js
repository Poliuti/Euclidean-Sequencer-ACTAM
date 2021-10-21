import { useContext } from "react";
import { Transport } from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
import { activeColor } from "../../../Default/colori";

const allNotesArray = [
  
  "A-1",
  "A#-1",
  "B-1",
  "C0",
  "C#0",
  "D0",
  "D#0",
  "E0",
  "F0",
  "F#0",
  "G0",
  "G#0",
  "A0",
  "A#0",
  "B0",
  "C1",
  "C#1",
  "D1",
  "D#1",
  "E1",
  "F1",
  "F#1",
  "G1",
  "G#1",
  "A1",
  "A#1",
  "B1",
  "C2",
  "C#2",
  "D2",
  "D#2",
  "E2",
  "F2",
  "F#2",
  "G2",
  "G#2",
  "A2",
  "A#2",
  "B2",
  "C3",
  "C#3",
  "D3",
  "D#3",
  "E3",
  "F3",
  "F#3",
  "G3",
  "G#3",
  "A3"
];

const PitchSlider = ({ id }) => {
  const {
    currentTransportState,
    setCurrentTransportState,
    chosenNotes,
    setChosenNotes,
    dummy,
    setDummy,
  } = useContext(EnvironmentContext);

  

  const handlePointerDown = () => {
    
    if (Transport.state === "started") {
      setCurrentTransportState(1);
    } else {
      setCurrentTransportState(0);
    }

    Transport.stop();
  };

  let note = allNotesArray.indexOf(chosenNotes[id]) - 24;
  let sign;
  if (note > 0) {
    sign = "+";
  } else if (note === 0) {
    sign = "";
  } else sign = "";

  return (
    <div className="pitch-slid-cont">
      <div className="slider-pattern pitch-slider">
        <input
          type="range"
          min="0"
          step="1"
          max="48"
          defaultValue="24"
          required
          onChange={(e) => {
            let noteArray = [...chosenNotes];
            noteArray[id] = allNotesArray[parseInt(e.target.valueAsNumber)];
            setChosenNotes(noteArray);
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={() => {
            if (currentTransportState) {
              Transport.start();
            }
            let tempDummy = dummy + 1;
            setDummy(tempDummy);
          }}
          onKeyDown={() => Transport.stop()}
          onKeyUp={() => Transport.start()}
          id="pitch"
          style={{ "--c": `${activeColor[id]}` }}
        />
        <label htmlFor="pitch">
          Pitch: {sign + `${allNotesArray.indexOf(chosenNotes[id]) - 24}`} st
        </label>
      </div>
    </div>
  );
};

export default PitchSlider;
