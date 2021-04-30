/*
//ACTION 1 - BUTTONS COLOR CHANGING (buttons of the space board changing color simultaneously) :
.querySelector(btn)
.classList.toggle(“color”??) -> will repeat the changing color of the button on the space board ?  
 every 3sec change to a different button (player has to be faster then the color swap) 
.AnimationEvent() timing 
:::> DONE ON CSS */

// console.log("Wazzup");
//ACTION 1: CLICK ON START TO KICK OFF THE COLOR SWAPS OF THE ZEBOARD
//test tuesday morning:
//action 1 : Player clicks on the start btn => colors swap kicks off

let windows = document.querySelectorAll(".window");
let startbtn = document.querySelector(".start-btn");
let board = document.getElementById("game-board");
const astro = document.querySelectorAll(".fas fa-user-astronaut");
//let audio = document.getElementById("sound");
let rocketPosition = undefined;
let counter = 0;
let gameEnded = false;

function startGame() {
  stopAudio();  // sound have to turn on only when player wins
  gameEnded = false;
  windows.forEach((oneWindow) => {
    const childs = [...oneWindow.childNodes];
    childs.forEach((element) => {
      oneWindow.removeChild(element);
    });
  });
  counter = 0;
  rocketPosition = Math.floor(Math.random() * 15); // choisir un num entre 0 et 15
  console.log(`rocket is at ${rocketPosition}`);
}

function applyCSSAnimationToCardRandomly() {
  // pour chaque windows, choisir un num entre 1 et 4
  windows.forEach((oneWindow, index) => {
    //  déterminer l'animation
    const css = "window" + ((index % 4) + 1); //  appliquer classCSS à la carte courante
    oneWindow.classList.add(css);
  });
}

function start(event) {
  startGame();
}

function checkClick(event, position) {
  if (!gameEnded) {
    const currentWindow = windows[position];
    if (rocketPosition === position) {
      const rocket = document.createElement("img");
      rocket.className = "rocket";
      rocket.src = "./img/rocket.gif";
      currentWindow.appendChild(rocket);
      playAudio();
      gameEnded = true;
    } else {
      if (currentWindow.childNodes.length === 0) {
        // condition si la window est vide
        const radiation = document.createElement("img");
        radiation.className = "radiation";
        radiation.src = "./img/radiation.gif";
        currentWindow.appendChild(radiation);
        if (counter++ >= 2) {
          // si le player n'a pas trouvé la bonne case où se trouvait la fusée au delà de 3 essaies >=2
          alert("you failed, try again!!");
          gameEnded = true;
        }
      }
    }
  }
}

function playAudio() {
  let sound = document.querySelector(".audio");
  sound.play();
}

function stopAudio() {
  let sound = document.querySelector(".audio");
  sound.pause();
}

windows.forEach((oneWindow, index) => {
  oneWindow.addEventListener("click", (e) => checkClick(e, index));
});

applyCSSAnimationToCardRandomly();
startbtn.addEventListener("click", start);
