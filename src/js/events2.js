var eventButton = document.querySelector("#events-2-button");

eventButton.addEventListener('click', function(event) {
  // changeText(event, this);
  event.preventDefault();
  this.innerHTML = "more new text...";
}, false);

function changeText(event, element) {
  event.preventDefault();
  element.innerHTML = "new text...";
}


var button = document.querySelector("#button");

function changeLinkText(event, element) {
  event.preventDefault();
  element.innerHTML = "This has been clicked...";
}

button.addEventListener('click', function(e) {
  changeLinkText(e, this);
}, false);