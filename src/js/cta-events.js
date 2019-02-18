const CTA = document.querySelector(".cta__heading button");
const ALERT = document.querySelector(".cta__heading h2");
const CHANGE_COLOR = document.querySelector(".cta__text .change-color");
const PARAGRAPHS = document.querySelectorAll(".cta__text p");
const CTA_TEXT = document.querySelector(".cta__text");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(current) {
  current.innerHTML == "Click Here!" ? CTA.innerHTML = "Hello There..." : CTA.innerHTML = "Click Here!";
  // CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

//CTA.onclick = reveal; // Simple way to add event to an element
CTA.addEventListener("click", function() { reveal(this) }, false);
CTA.addEventListener("click", function() {
  console.log("alert triggered");
}, false);

function changeColor(e, link) {
  e.preventDefault();
  link.innerHTML = "This has been clicked...";
  for (let i = 0; i < PARAGRAPHS.length; i++) {
    PARAGRAPHS[i].classList.add("updateColor");
  }
}

CHANGE_COLOR.addEventListener('click', function(e) {
  changeColor(e, this);
}, false);

function changeColorOnTouch() {
  CTA_TEXT.style.backgroundColor = "lightblue";
}

CTA_TEXT.addEventListener('mouseenter', function() {
  changeColorOnTouch()
}, false);
CTA_TEXT.addEventListener('mouseleave', function() { CTA_TEXT.removeAttribute("style")}, false);

function showAlert() {
  alert("heading clicked");
}

firstHeading = document.querySelector(".cta__heading h1");
// firstHeading.onclick = showAlert;
firstHeading.addEventListener('click', showAlert, false);