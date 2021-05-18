import * as Tone from "tone";

const PlayPauseButton = ({playbackState, setPlaybackState, sequenza}) => {
    


    const handleClick = (e) => {
        
        if (e.target.value === "Play") {
            setPlaybackState("Stop");
            e.target.value = "Stop";
            Tone.context.resume();
            
            Tone.Transport.start();
            sequenza.start();



            console.log(Tone.Transport.state);


            
        } else {
            setPlaybackState("Play");
            e.target.value = "Play";
            sequenza.stop();
            Tone.Transport.stop();
            
            
            
            console.log(Tone.Transport.state);
            
        }
        console.log("Sequenza in PlayPauseButton: ")
        console.log(sequenza._eventsArray);

    }
    return ( <div className="play-pause-container">
        <button value="Play" onClick={(e) => handleClick(e)} className="play-pause-button">
            {playbackState}
        </button>
    </div> );
}
 
export default PlayPauseButton;