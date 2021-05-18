const TempoModifier = ({tempo, setTempo}) => {
    
    return ( <div className="tempo-modifier">
        <button onClick={() => {setTempo({...tempo, tatum:tempo.tatum/2})}} className="per-due">2 Times Faster</button>
        <button onClick={() => {setTempo({...tempo, tatum:tempo.tatum*2})}} className="diviso-due">2 Times Slower</button>
    </div> );
}
 
export default TempoModifier;