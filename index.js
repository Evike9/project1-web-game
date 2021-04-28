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
//let windowbtn = document.querySelectorAll(".window");

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
  rocket.src = "./img/rocket.gif";
  randomWindow.appendChild(rocket);
  console.log(randomWindow);
}

function applyCSSAnimationToCardRandomly() {
  // pour chaque carte, choisir un num entre 1 et 4
  windows.forEach((oneWindow, index) => {
    //  déterminer l'animation
    const css = "window" + ((index % 4) + 1); //  appliquer classCSS à la carte courante
    oneWindow.classList.add(css);
  });
}

function windowclicked(event) {
 // action: if player click sur une des case/window : condition soit le rocket apparait else n'apparait pas
}

function start(event) {
  applyCSSAnimationToCardRandomly();
  moveRocketRandomly();
}

startbtn.addEventListener("click", start);
console.log(startbtn);

windows.addEventListener("click", windowclicked);
console.log(windows);

// loop to add event listeners to each windows

// action if Player hits START btn then the colors changes kicks off
/*const startBtn = document.getElementById("start-btn");
const showboardColors = document.querySelectorAll(".board div");
/*console.log(board)*/

/*const handleBoard = (foo) => {
  foo.classlist.toggle("board")
}*/
/*console.log(showboardColors);*/

/*showboardColors.forEach((board) => {
  board.addEventListener("click", (e) => handleBoard(board))
})*/

/*const revealBoard = () => {
  board.classList.toggle("hidden")
}

startBtn.addEventListener("click", revealBoard)*/

/*.document.querySelector().addEventlistener(‘click, ())*/

//ACTION 2 - CLICK BUTTON : player click on the button of the space board:

/*let clickedBoard = null;
function onRocketClicked(e) {
  const target = e.currentTarget;
  if (target === clickedBoard ||  target.className.includes(" done")){
    return; 
  }
//  console.log(target.querySelectorAll);

  target.className = target.className.replace("board", "rocket").trim();
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
  }
}*/

/*test -> let beforeRocket = document.querySelectorAll("rocket");
  //I create let = beforeRocket as console keeps on saying beforeRocketPops is not defined on HTML element onClick arghhhhh
  /*console.log(beforeRocketPops);*/
/*document.querySelector("rocket").addEventlistener("click", beforeRocket);*/

/*test : let r = document.querySelector("rocket");
  if ( r.style.display === "none"){
    r.style.display = "block";
  } else {
    r.style.display = "none";
  }*/

/* TEST 1:const rocketHunt = document.querySelector("rocket");

const handleWallSelect = (foo) => {
    foo.classList.toggle(".board")
}
console.log(handleWallSelect); 

rocketHunt.forEach((rocket) => {
    rocketHunt.addEventListener("click", (e) => handleWallSelect(rocket))
})

/*document.querySelector().addEventlistener(‘click, ())  -> to click on the button*/

//ACTION 3 - QUIZZ POP IN UP:  ->> THIS IS OPTIONAL !!!!

/*classList.toggle(“Hidden”) ?   (toggle. => remove or add the class )

document.querySelectorAll(‘.square’).forEach(oneSquare => {
    if (state.square) {
      oneSquare.style.visibility = 'visible';
    } else {
      oneSquare.style.visibility = 'hidden';
    }
  });*/

//ACTION 4 - PLAYER CLICKS on ANSWER :

//.document.querySelector().addEventlistener(‘click, ())  -> to click on the button

//ACTION 5 - PLAYER gets SPACE LIFE (astronaut)  wahouuuuu:

//ACTION 6 - GAME OVER Pops up

//ACTION 7 : PLAYER can restart to play again:

//ACTION 8 : ROCKET POPS UP :

//ACTION 9: PLAYER gets a SPACE LIFE :
