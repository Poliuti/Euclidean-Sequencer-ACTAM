import {
  makeChannel
} from "../Functions/makeChannel"
import customSamples from "../Samples/customSamples";
import africaSamples from "../Samples/africaSamples";
import indiaSamples from "../Samples/indiaSamples";
import middleEastSamples from "../Samples/middleEastSamples";
import restOfTheWorldSamples from "../Samples/restOfTheWorldSamples";
import southAmericaSamples from "../Samples/southAmericaSamples";



const samplesPools = [

  customSamples,
  africaSamples,
  southAmericaSamples,
  middleEastSamples,
  indiaSamples,
  restOfTheWorldSamples
]




let samplerList = [
  [],
  [],
  [],
  [],
  [],
  []
];
let channelList = [
  [],
  [],
  [],
  [],
  [],
  []
];

for (let j = 0; j < samplesPools.length; j++) {
  for (let i = 0; i < samplesPools[j].length; i++) {
    let {
      sampler,
      channel
    } = makeChannel(samplesPools[j][i], 0.2 * i, -2);

    samplerList[j].push(sampler);
    channelList[j].push(channel);
  }
}



export {
  samplerList,
  channelList,
};