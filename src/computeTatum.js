export default function computeTatum(bpm, speedModifier) {
	let tatum = 60/bpm  * 1000 / speedModifier;
	return tatum;
}