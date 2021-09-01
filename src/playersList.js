import { Player } from "tone";
import customSamples from "./Contexts/Custom/customSamples";



let playersList = customSamples.map((sample) => {
    return new Player(sample);

});

export default playersList

