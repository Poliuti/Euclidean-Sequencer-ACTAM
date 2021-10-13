import {
    Filter
} from "tone";



let myLPFilter = new Filter({
    frequency: 20000,
    type: "lowpass",
    rolloff: -48,


});



export default myLPFilter