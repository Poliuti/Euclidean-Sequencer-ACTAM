import {
  generateAudioChain
} from "../Functions/generateAudioChain"
import customSamples from "../Samples/customSamples";
import africaSamples from "../Samples/africaSamples";
import asiaSamples from "../Samples/asiaSamples";
import europeSamples from "../Samples/europeSamples";

import latinAmericaSamples from "../Samples/latinAmericaSamples";



const samplesPool = [

  customSamples,
  africaSamples,
  latinAmericaSamples,
  europeSamples,
  asiaSamples
]

const numInstr = samplesPool.map((samplesList) => samplesList.length)


let samplerList = [
];

let channelList = [];



for (let i = 0; i < samplesPool.length; i++) {
  samplerList.push([]);
  channelList.push([]);

}



for (let j = 0; j < samplesPool.length; j++) { // for every sample of every environment we create the audio chain
  for (let i = 0; i < samplesPool[j].length; i++) {
    let {
      sampler,
      channel
    } = generateAudioChain(samplesPool[j][i], 0.2 * Math.pow(-1, i) * i, -2 - 1 * i);

    samplerList[j].push(sampler);
    channelList[j].push(channel);
  


  }
}






export {
  samplerList,
  channelList,
  numInstr
};