// Your code here
const dodger =document.getElementById("dodger");
function moveDodgerRight() {
    const leftNumbers=dodger.style.left.replace("px","");
    const left =parseInt(leftNumbers,10);

    if (left>0) {
        dodger.style.left = `${left+1}px`;
    }
}

document.addEvevntListener ("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
}