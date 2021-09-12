import {activeColor, nonActiveColor, tempNonActiveColor} from "./../Default/colori"

const colora = (euclideanArray, index) => {

    euclideanArray.forEach((cell, idx) => {
        let dot = document.getElementById(`${index}${idx}`);

        if (dot !== null) {
            if (cell === 1 ) {
                
                if (dot.classList.contains("tempInactive")){
                    dot.style.backgroundColor = tempNonActiveColor[index]
                }
                else {dot.style.backgroundColor = activeColor[index];}
            } else {
                dot.style.backgroundColor = nonActiveColor;
            }
        } else {}
    })
}

export default colora