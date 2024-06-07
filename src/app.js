const boxes = document.querySelectorAll(".box");
let turn = "X";
let win = [[0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
let isGameOver = false;

boxes.forEach(e => {
    e.addEventListener('click', () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn;
            checkWin();
            checkDraw();
            checkTurn();

        }

    })
})
const checkWin = () => {
    win.forEach(e => {
        let v0 = boxes[e[0]].innerHTML;
        let v1 = boxes[e[1]].innerHTML;
        let v2 = boxes[e[2]].innerHTML;
        if (v0 != "" && v0 === v1 && v0 == v2) {
            isGameOver = true;
            document.querySelector(".result").innerHTML = `${turn} won the game`;
            document.querySelector(".playagain").style.display = "inline";

            for (let j = 0; j < 3; j++) {
                boxes[e[j]].style.backgroundColor = "#08D9D6";
            }
        }
    })
}
const checkTurn = () => {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".rx").style.backgroundColor = "#FF2E63";
        document.querySelector(".rr").style.backgroundColor = "transparent";
    }
    else {
        turn = "X";
        document.querySelector(".rr").style.backgroundColor = "#FF2E63";
        document.querySelector(".rx").style.backgroundColor = "transparent";
    }
}
const checkDraw = () => {
    if(!isGameOver){
        let isDraw = true;
    boxes.forEach(e => {
        if (e.innerHTML === "") {
            isDraw = false;
        }
    })
    if (isDraw) {
        document.querySelector(".result").innerHTML = "Draw";
        document.querySelector(".playagain").style.display = "inline";
        isGameOver=true;    
    }
}
}
document.querySelector(".playagain").addEventListener('click', () => {
boxes.forEach(e=>{
    e.innerHTML="";
    e.style.backgroundColor="transparent";
})
document.querySelector(".result").innerHTML="";
document.querySelector(".playagain").style.display = "none";
isGameOver=false;
turn='X';
document.querySelector(".rr").style.backgroundColor = "#FF2E63";
document.querySelector(".rx").style.backgroundColor = "transparent";

})