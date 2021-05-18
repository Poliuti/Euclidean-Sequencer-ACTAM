export default function computeTatum(bpm) {
	let tatum = 60/bpm  * 1000;
	return tatum;
}