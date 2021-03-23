//Global Constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var cluePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakes = 0;
var count = 3000;
var countDown = setInterval(timer, 100);
var clueHoldTime = 1000;

//Start / stop game functions
function startGame() {
  //initialize game variables
  progress = 0;
  mistakes = 0;
  count = 3000;
  clueHoldTime = 1000;
  countDown = setInterval(timer, 100);
  gamePlaying = true;
  document.getElementById("mistakes").innerHTML = 0;
  document.getElementById("dwit").classList.add("hidden");
  document.getElementById("nyan").classList.add("hidden");
  randomizePattern();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //stop the game
  gamePlaying = false;
  pattern = [];
  clearInterval(countDown);
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

//Timer
function timer() {
  if (gamePlaying == true && cluePlaying == false) {
    count-=5;
    if (count <= 0) {
      clearInterval(countDown);
      loseGame();
    }
  }
  var rem = count / 100;
  document.getElementById("time").innerHTML = 
      rem.toPrecision(count.toString().length) + " secs";
}

//Button functions
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
function randomizePattern() {
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * 5) + 1);
  }
}

//Clue functions
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  cluePlaying = true;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//End game notifier functions
function loseGame() {
  document.getElementById("mistakes").innerHTML = 0;
  stopGame();
  pattern = [];
  alert("Game Over. You lost.");
  document.getElementById("dwit").classList.remove("hidden");
}

function winGame() {
  document.getElementById("mistakes").innerHTML = 0;
  stopGame();
  pattern = [];
  alert("Game Over. You won!");
  document.getElementById("nyan").classList.remove("hidden");
}

//Guess function
function guess(btn) {
  cluePlaying = false;
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        clueHoldTime -= 100;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (mistakes == 2) {
      loseGame();
    }
    mistakes++;
    document.getElementById("mistakes").innerHTML = mistakes;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.626,
  2: 293.665,
  3: 329.628,
  4: 349.228,
  5: 392.0
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
