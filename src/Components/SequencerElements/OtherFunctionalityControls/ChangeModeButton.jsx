import { Transport } from "tone";

const ChangeModeButton = ({mode, setMode, removeClass }) => {
     
    const changeMode = () => {
    setMode(!mode);
    removeClass("tempInactive", "dot");
    Transport.stop();
  };


    return ( <div className="change-mode-cont">
        <button className="changeMode" onClick={changeMode}>

        </button>
    </div> );
}
 
export default ChangeModeButton;


