console.log("welcome to tic-tac-toe")
let playerturn = document.getElementById('turn')
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let game_over=new Audio("gameover.mp3")
let turn = "X"
const changeTurn=()=>{
return turn ==="X"?"0":"X" 
}

const checkwin=()=>{
    let boxetext=document.getElementsByClassName("box-text");
    let showwin=document.getElementById("showwin");
    let playerwin = document.getElementById('playerwin')
    let draw = document.getElementById('draw')
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let drawFlag = true;
    winningConditions.forEach(e =>{
        if((boxetext[e[0]].innerText === boxetext[e[1]].innerText) && (boxetext[e[1]].innerText === boxetext[e[2]].innerText) 
        && (boxetext[e[0]].innerText !== "")){
            showwin.style.display = "flex"
            playerwin.innerText=boxetext[e[0]].innerText;
            music.play()
            drawFlag = false;
            setTimeout(() => {
                showwin.style.display = "none"
                music.pause();
                reset();
            }, 3000);
        }
    })
    if (drawFlag) {
        let emptyBoxExists = false;
        Array.from(boxetext).forEach(box => {
            if (box.innerText === "") {
                emptyBoxExists = true;
            }
        });
        if (!emptyBoxExists) {
            showwin.style.display = "flex";
            draw.innerHTML= "Match Draw";
            music.play();
            setTimeout(() => {
                showwin.style.display = "none";
                music.pause();
                reset();
            }, 3000);
        }
    }
}
// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.box-text'); 
    element.addEventListener('click',()=>{
        if(boxtext.innerText=== ''){
            boxtext.innerText=turn
                playerturn.innerText=turn ==="X"?"0":"X"
                turn=changeTurn();
                audioturn.play();
                checkwin();
        }
    })
})
let reset = ()=>{
    Array.from(boxes).forEach(element => {
        let boxtext=element.querySelector('.box-text'); 
                boxtext.innerText=""
                turn = "X"
            }
        )
}