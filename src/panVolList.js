import {PanVol} from "tone";

const numLine = 4;

let panVolList = [];

for (let i = 0; i < numLine; i++) {
    panVolList.push(new PanVol(-0.25, 0).toDestination())
    
};

panVolList.forEach((panVolComp, idx) => panVolComp.set({
    pan: 0.25 * idx,
    volume: -20 * idx

}))



export default panVolList;