import * as Tone from "tone";
import {
  makeChannel
} from "./makeChannel"
import customSamples from "./Contexts/Custom/customSamples";
import africaSamples from "./Contexts/Africa/AfricaSamples";
import indiaSamples from "./Contexts/India/IndiaSamples";
import middleEastSamples from "./Contexts/MiddleEast/MiddleEastSamples";
import restOfTheWorldSamples from "./Contexts/RestOfTheWorld/RestOfTheWorldSamples";
import southAmericaSamples from "./Contexts/SouthAmerica/SouthAmericaSamples";



const samplesPools = [

  customSamples,
  africaSamples,
  indiaSamples,
  middleEastSamples,
  southAmericaSamples,
  restOfTheWorldSamples
]




let samplerList = [[], [], [], [], [], []];
let channelList = [[], [], [], [], [], []];

for (let j = 0; j < samplesPools.length; j++) {
  for (let i = 0; i < samplesPools[j].length; i++) {
    let {
      sampler,
      channel
    } = makeChannel(customSamples[i], 0.2 * i, -5 * i);

    samplerList[j].push(sampler);
    channelList[j].push(channel);
  }
}

console.log(channelList);

export {
  samplerList,
  channelList,
};