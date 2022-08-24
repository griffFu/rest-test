import './style.css'
import genAbout from "./about.js";
import genMenu from "./menu.js";
import genContact from "./contact.js";

//1.) set up the html page and default tab styling in here
// default content set up
let content = document.getElementById('content');
let header = document.getElementById('header');

// creating the three different buttons
let aboutButton = document.createElement("button");
aboutButton.innerHTML = "about"
header.appendChild(aboutButton)

let menuButton = document.createElement("button");
menuButton.innerHTML = "menu"
header.appendChild(menuButton)

let contactButton = document.createElement("button");
contactButton.innerHTML = "Contact"
header.appendChild(contactButton)


// adding the event listeners for each button
aboutButton.onclick = function(){
    genAbout()
}

menuButton.onclick = function(){
    genMenu()
}

contactButton.onclick = function(){
    genContact()
}
