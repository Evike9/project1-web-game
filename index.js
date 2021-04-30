//DOM MANIP



let windows = document.querySelectorAll(".window");
let startbtn = document.querySelector(".start-btn");
let board = document.getElementById("game-board");
const astro = document.querySelectorAll(".fas fa-user-astronaut");
//let audio = document.getElementById("sound");
let rocketPosition = undefined;
let counter = 0;
let gameEnded = false;

function startGame() {
  stopAudio(); // ACTION sound have to turn on only when player wins - sound is stop at the beginning of the game
  gameEnded = false;
  windows.forEach((oneWindow) => {
    const childs = [...oneWindow.childNodes];
    childs.forEach((element) => {
      oneWindow.removeChild(element);
    });
  });
  counter = 0;
  rocketPosition = Math.floor(Math.random() * 15); // math.floor/random choose a window nb btw 0 & 15
  console.log(`rocket is at ${rocketPosition}`); // log only for the presention demo to verify where's the pour vérifié ds le log dans quelle window se situe la fusée
}
//ACTION - WINDOWS/PAD COLOR CHANGING  RANDOMLY:
function applyCSSAnimationToCardRandomly() {
  // for every windows, must this function choose a nb btw 1 & 4 as there's 4 animations color-me-in(CSS)
  windows.forEach((oneWindow, index) => {
  //  gets each windows one by one to be able to random the 4 animations color-me-in(CSS)
    const css = "window" + ((index % 4) + 1); //  apply the animation color-me-in classCSS to the window
    oneWindow.classList.add(css);
  });
}

function start(event) {
  startGame();
}

//ACTION: CLICK ON START IGNITION TO ACTIVATE THE HIDDEN ROCKET MOVING RANDOMLY
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
        radiation.className = "radiation"; // création de l'élement Radiation gif tout comme la fusée
        radiation.src = "./img/radiation.gif";
        currentWindow.appendChild(radiation);
        if (counter++ >= 2) {
          // si le player n'a pas trouvé la bonne window où se trouvait la fusée au delà de 3 essaies >=2
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
