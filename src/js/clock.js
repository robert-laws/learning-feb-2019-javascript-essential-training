const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds(); 

let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {
  if(HOURHAND != undefined) {
    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;
  
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  }
}

const TITLE = document.querySelector("#clockTitle");

function textAlert() {
  if(TITLE != undefined) {
    TITLE.classList.toggle("alert");
  }
}

var interval = setInterval(runTheClock, 1000);

var titleInterval = setInterval(textAlert, 2000);