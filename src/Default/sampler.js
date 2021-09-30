import {
  makeChannel
} from "../Functions/makeChannel"
import customSamples from "../Samples/customSamples";
import africaSamples from "../Samples/africaSamples";
import indiaSamples from "../Samples/indiaSamples";
import middleEastSamples from "../Samples/middleEastSamples";
import restOfTheWorldSamples from "../Samples/restOfTheWorldSamples";
import southAmericaSamples from "../Samples/southAmericaSamples";



const samplesPool = [

  customSamples,
  africaSamples,
  southAmericaSamples,
  middleEastSamples,
  indiaSamples,
  restOfTheWorldSamples
]

const numInstr = samplesPool.map((samplesList) => samplesList.length)


let samplerList = [
];

let channelList = [];

for (let i = 0; i < samplesPool.length; i++) {
  samplerList.push([]);
  channelList.push([]);
}



for (let j = 0; j < samplesPool.length; j++) {
  for (let i = 0; i < samplesPool[j].length; i++) {
    let {
      sampler,
      channel
    } = makeChannel(samplesPool[j][i], 0.2 * i, -2);

    samplerList[j].push(sampler);
    channelList[j].push(channel);
  }
}

console.log(samplerList);
console.log(channelList);



export {
  samplerList,
  channelList,
  numInstr
};