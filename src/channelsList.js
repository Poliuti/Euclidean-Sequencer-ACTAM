import {Channel} from "tone"

let numChannels = 4;

const channel1 = new Channel(0, 0);
const channel2 = new Channel(0, -1);
const channel3 = new Channel(0, 1);
const channel4 = new Channel(0, 0.5);

let channelsList = [
    channel1,
    channel2,
    channel3,
    channel4
]

channelsList.forEach(channel => channel.toDestination());

export default channelsList;
