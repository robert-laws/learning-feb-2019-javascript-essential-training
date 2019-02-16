// Javascript and the DOM - part 1
var domExamples = document.getElementById("dom-1");

var firstPostTitle = document.querySelector(".post__header h5").textContent;
var paragraph = document.createElement("p");
var paragraphText = document.createTextNode(firstPostTitle);
paragraph.appendChild(paragraphText);
domExamples.appendChild(paragraph);

var postTitles = document.querySelectorAll(".post__header h5");
var paragraph2 = document.createElement("p");
var paragraphText2 = document.createTextNode(postTitles[1].textContent);
paragraph2.appendChild(paragraphText2);
domExamples.appendChild(paragraph2);

var postCount = document.querySelectorAll(".post");
var paragraph3 = document.createElement("p");
var paragraphText3 = document.createTextNode(postCount.length);
paragraph3.appendChild(paragraphText3);
domExamples.appendChild(paragraph3);

console.log(firstPostTitle);

