// Advanced Events

const testWrapper = document.querySelector(".events__typing textarea");
const testArea = document.querySelector(".type-area");
const originText = document.querySelector(".sample-text");

const resetButton = document.querySelector(".start-button");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// add leading zero to numbers 9 and lower
function leadingZero(time) {
  if(time <= 9) {
    time = "0" + time;
  }
  return time;
}

// run an standard timer
function runTimer() {
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// match text with provided text
function spellCheck() {
  let textEntered = testArea.value;
  let originTextMatch = originText.innerHTML.substring(0, textEntered.length);

  if(textEntered == originText.innerHTML) {
    clearInterval(interval);
    testWrapper.style.borderColor = "green";
  } else {
    if(textEntered == originTextMatch) {
      testWrapper.style.borderColor = "blue";
    } else {
      testWrapper.style.borderColor = "red";
    }
  }
}

// start the timer
function start() {
  let textEnteredLength = testArea.value.length;
  if(textEnteredLength === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}

// reset all
function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0];
  timerRunning = false;

  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
}

//event listener to typing
if(testWrapper) {
  testArea.addEventListener("keypress", start, false);
  testArea.addEventListener("keyup", spellCheck, false);
  resetButton.addEventListener("click", reset, false);
}