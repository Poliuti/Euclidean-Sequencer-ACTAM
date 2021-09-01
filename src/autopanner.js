import * as Tone from "tone";

const autoPanner = new Tone.AutoPanner("8n").toDestination();
export default autoPanner;