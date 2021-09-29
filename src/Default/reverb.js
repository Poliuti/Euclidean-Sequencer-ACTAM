import {
    Reverb
} from "tone";

let myReverb = new Reverb({
    decay: 0.5,
    wet: 0.20,
    preDelay: 0.01
}).toDestination();



export default myReverb