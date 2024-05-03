
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h_score = 0; // high score
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "green", "purple"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        setTimeout(function () {
            levelUP();
        }, 1000);
    }
});

function levelUP() {
    userSeq = [];
    level++;
    //high score
    if(h_score<level){
        h_score++;
    }
    else{
        h_score = h_score;
    }
    h2.innerText = `Level ${level}`;
    // random button chose
    let randId = Math.floor(Math.random() * 4);
    let randColor = btns[randId];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    scoreUp();
};

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUP, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor = this.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
};

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// high score
function scoreUp(){
    document.querySelector(".score-count").innerHTML = h_score;
};
scoreUp();