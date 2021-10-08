import {
    Filter
} from "tone";



let myLPFilter = new Filter({
    frequency: 10000,
    type: "lowpass",
    rolloff: -48,


});



export default myLPFilter