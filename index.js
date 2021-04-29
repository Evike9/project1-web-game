/*
//ACTION 1 - BUTTONS COLOR CHANGING (buttons of the space board changing color simultaneously) :
.querySelector(btn)
.classList.toggle(“color”??) -> will repeat the changing color of the button on the space board ?  
 every 3sec change to a different button (player has to be faster then the color swap) 
.AnimationEvent() timing 
:::> DONE ON CSS */

console.log("Wazzup");
//ACTION 1: CLICK ON START TO KICK OFF THE COLOR SWAPS OF THE ZEBOARD
//test tuesday morning:
//action 1 : Player clicks on the start btn => colors swap kicks off

let windows = document.querySelectorAll(".window");
let startbtn = document.querySelector(".start-btn");
let board = document.getElementById("game-board");
const astro = document.querySelectorAll(".fas fa-user-astronaut");
//let audio = document.getElementById("sound");

function draw() {
  const rock = document.getElementById("canvas");
}

function moveRocketRandomly() {
  const number = Math.floor(Math.random() * 15); // choisir un num entre 0 et 15
  const randomWindow = windows[number]; // pick une window avec number
  const previousRocket = document.querySelector(".window .rocket"); // si image existe déjà dans la grille, l'enlever
  if (previousRocket !== null) {
    previousRocket.remove();
  }
  // (re)créer une image en HTML avec le gif de la rocket
  const rocket = document.createElement("img");
  rocket.className = "rocket";
  rocket.src = "./img/rockit.gif";
  randomWindow.appendChild(rocket);
  //console.log(randomWindow);
}

function applyCSSAnimationToCardRandomly() {
  // pour chaque carte, choisir un num entre 1 et 4
  windows.forEach((oneWindow, index) => {
    //  déterminer l'animation
    const css = "window" + ((index % 4) + 1); //  appliquer classCSS à la carte courante
    oneWindow.classList.add(css);
  });
}

/*function windowclicked(event) {
  // action: if player click sur une des case/window : condition soit le rocket apparait else n'apparait pas
}*/

function start(event) {
  //moveRocketRandomly();
  //console.log("yo");
}

function checkClick(event) {
  if (event.target.children.length) {
    console.log("yay");
    moveRocketRandomly();
  } else {
    alert("try again");
  }
}

function audio() {}

windows.forEach((oneWindow) => {
  oneWindow.addEventListener("click", (e) => checkClick(e));
});

applyCSSAnimationToCardRandomly();
startbtn.addEventListener("click", start);
console.log(startbtn);

//sound.addEventListener("click", audio);
//console.log(sound);



  /*target.className = target.className.replace("board", "rocket").trim();
  target.className += " done";

  console.log(target.getAttribute("rocket"));

  if (!clickedBoard) {
    clickedBoard = target;
  } else if (clickedBoard) {
    if (clickedBoard.getAttribute("rocket") === target.getAttribute("rocket")) {
    console.log('ex: board equal');
      
    } else {
      console.log('ex: rocket hidden');
      setTimeout(() => {
        console.log('rocket pops up');
        clickedBoard.className.replace(" done", "rocket").trim();
        target.className.replace(" done", "rocket").trim();
      }, 500);
    }
  }*/




const handleWallSelect = (foo) => {
    foo.classList.toggle(".board")
}
console.log(handleWallSelect); 

rocketHunt.forEach((rocket) => {
    rocketHunt.addEventListener("click", (e) => handleWallSelect(rocket))
})

