/*
INFO2180 Lab 4- MAZE
Taje Carter
620079694 
*/


var loser = false; //If user hits a wall; loses

window.onload = function() {
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].onmouseover = overAllBoundary;
    }
};

//Glows red on hover
function overAllBoundary() {
    loser = true; 
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].classList.add = ("youlose");
    }
}

//Alert Messages
function message() {
    if (loser){
        alert ("Sorry, you lost. Try Again :[");
    } 
    else{
        alert ("Yay, you won! :]");
    }
}

