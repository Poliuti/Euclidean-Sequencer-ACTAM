import * as Tone from "tone";
import computeTatum from "../computeTatum";

const TempoModifier = ({tempo, setTempo, index}) => {
    console.log("Tempo inside Tempo Modifier : ")

    console.log(tempo);
    

    const handleDouble = () => {
        let tempoUpdate = {...tempo};
        tempoUpdate.tempoSpeedIndex[index] *= 2; 
        tempo.tatum[index] /= 2;
        setTempo(tempoUpdate);
    }

    const handleHalf = () => {
        let tempoUpdate = {...tempo};
        tempoUpdate.tempoSpeedIndex[index] /= 2; 
        tempo.tatum[index] *= 2;
        setTempo(tempoUpdate);
    }



/*     const handleTerzine = (event) => {
        let tempoUpdate = {...tempo};

        if (parseInt(event.target.isTerzine) === 0) {
            tempoUpdate.tempoSpeedIndex[index] /= 3/2;
            event.target.isTerzine = "1";
        } else {
            tempoUpdate.tempoSpeedIndex[index] *= 3/2;
            event.target.isTerzine = "0";
        }
        setTempo(tempoUpdate);
    } */

    //() => {setTempo({...tempo, tempoSpeedIndex:[...(tempo.tempoSpeedIndex), tempo.tempoSpeedIndex[index]=(tempo.tempoSpeedIndex[index])*2]})}
    
    return ( <div className="tempo-modifier">
        <button onClick={handleDouble} className="per-due">2 Times Faster</button>
        <button onClick={handleHalf} className="diviso-due">2 Times Slower</button>
    {/*     <button onClick={handleTerzine} isTerzine="0"  className="terzine">Terzine</button> */}
    
        
        
        
        <h6>{`1 / ${8 * tempo.tempoSpeedIndex[index]}`}</h6> 
    </div> );
}
 
export default TempoModifier;