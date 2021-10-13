import {
    activeColor,
    nonActiveColor
} from "./../Default/colori"

const colora = (euclideanArray, index) => {

    euclideanArray.forEach((cell, idx) => {
        let dot = document.getElementById(`${index}${idx}`);

        if (dot !== null) {
            if (cell === 1) {
                dot.style.backgroundColor = activeColor[index];

            } else {
                dot.style.backgroundColor = nonActiveColor;
            }
        } else {}
    })
}

export default colora