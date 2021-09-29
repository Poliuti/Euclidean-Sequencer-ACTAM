import {
    Filter
} from "tone";
import myReverb from "./reverb";


let myLPFilter = new Filter({
    frequency: 10000,
    type: "lowpass",
    rolloff: -48,


}).connect(myReverb);



export default myLPFilter