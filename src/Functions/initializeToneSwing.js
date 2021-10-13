import {
    Transport
} from "tone";

const initializeToneSwing = () => {

    Transport.swing = 0;
    Transport.swingSubdivision = "8n";

}

export default initializeToneSwing;