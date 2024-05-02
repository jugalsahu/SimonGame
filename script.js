
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow","red","green","purple"];

document.addEventListener("keypress",function(){
  if(started == false)
  {
    console.log("game started");
    started = true;
    levelUP();
  }
});

function levelUP(){
    level++;
    h2.innerText = `Level ${level}`;
    // random button chose
    let randId = Math.floor(Math.random()*4);
    let randColor = btns[randId];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
};

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function btnPress(){
    let btn=this;
    btnFlash(btn);
};

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns)
{
    btn.addEventListener("click",btnPress)
}