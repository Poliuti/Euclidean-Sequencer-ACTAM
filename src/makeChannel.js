import * as Tone from "tone";
import myLPFilter from "./Controls/filter";
import myReverb from "./Controls/reverb";

export const makeChannel = (url, pan, volume) => {
    
    let sampler = new Tone.Sampler({
        urls: {
            A1: `${url}`
        },

        onload: () => {
            console.log("LOADED");
        }
        
    });

    let channel = new Tone.Channel({
        pan: pan,
        volume : volume,
        mute: false,
        solo: false
    });

    sampler = sampler.chain(channel, myLPFilter)
 /*    sampler = sampler.connect(channel); */
    return {sampler, channel};
}
