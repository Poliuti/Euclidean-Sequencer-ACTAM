import { useContext } from "react";
import { Transport} from "tone";
import { EnvironmentContext } from "../../../Contexts/EnvironmentContext";
import { activeColor} from "./../../../Default/colori";


const allNotesArray = ["C-1", "D-1", "E-1", "F-1", "G-1","A-1", "B-1", "C-0", "D-0", "E-0", "F-0", "G-0", "A0", "B0", "C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4","E4", "F4", "G4", "A4","B4"]


const PitchSlider = ({id}) => {

    
    const { currentTransportState, setCurrentTransportState, chosenNotes, setChosenNotes } = useContext(EnvironmentContext);

    const handlePointerDown = () => {
      console.log("On Pointer Down")
    if (Transport.state === "started") {
      setCurrentTransportState(1);
 
    } else {
      setCurrentTransportState(0);

    }
    
    Transport.stop();
  };

  let note = allNotesArray.indexOf(chosenNotes[id]) - 19;
  let sign;
  if (note > 0) {sign = '+'}
  else if (note === 0){sign = ''}
  else (sign = '')

    return ( <div className="pitch-slid-cont">
        <div className="slider-pattern pitch-slider">
      <input
        type="range"
        min="0"
        step="1"
        max="34"
        defaultValue="19"
        required
        onChange={(e) => {
          let noteArray = [...chosenNotes];
          console.log("On Change")

          noteArray[id] = allNotesArray[parseInt(e.target.valueAsNumber)];
          setChosenNotes(noteArray);
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={() => {
          if (currentTransportState) {
            Transport.start();
          }
        }}
        onKeyDown={() => Transport.stop()}
        onKeyUp={() => Transport.start()}
        id="pitch"
        style={{ "--c": `${activeColor[id]}` }}
      />
      <label htmlFor="pitch">Note: {sign + `${(allNotesArray.indexOf(chosenNotes[id]) - 19)}` }</label>
    </div>
    </div> );
}
 
export default PitchSlider;