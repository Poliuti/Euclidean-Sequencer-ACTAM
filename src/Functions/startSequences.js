import {
  Transport
} from "tone";

const startSequences = (sequences) => {
  sequences.forEach((seq) => {
    seq.start("+0.1");
  });
  Transport.start("+0.1");
}
export default startSequences
