const colora = (euclideanArray, index) => {

    euclideanArray.forEach((cell, idx) => {
        let dot = document.getElementById(`${index}${idx}`);

        if (dot !== null) {
            if (cell === 1) {
                dot.style.backgroundColor = "rgb(241, 53, 109)";
            } else {
                dot.style.backgroundColor = "rgba(187, 187, 187, 0.58)";
            }
        } else {}
    })
}

export default colora