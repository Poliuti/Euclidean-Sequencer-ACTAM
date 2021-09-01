import { PanVol, Distortion } from "tone";

let panVol = new PanVol(-1.0, -90).toDestination();
let distortion = new PanVol(-1.0, -30).toDestination();

export {panVol, distortion};