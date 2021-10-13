
import {Channel, Sampler } from "tone";
import myReverb from "./../Default/myReverb";
import myLPFilter from "./../Default/myLPFilter";


export const generateAudioChain = (url, pan, volume) => {

    let sampler = new Sampler({
        urls: {
            A1: `${url}`
        },

        onload: () => {
            console.log("LOADED");
        }

    });

    let channel = new Channel({
        pan: pan,
        volume: volume,
        mute: false,
        solo: false
    });

  


    sampler = sampler.chain(channel, myLPFilter, myReverb) //audio chain
    return {
        sampler,
        channel
    };
}
