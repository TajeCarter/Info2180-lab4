/*
INFO2180 Lab 4- MAZE
Taje Carter
620079694 
*/

"use strict";

var loser = false; //If user hits a wall; loses

window.onload = function() {
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].onmouseover = overAllBoundary;
    }

    // Starts game; resets walls
    var game_start = document.getElementbyId("start");
    game_start.onclick = clickStart;

    // Alerts completion of maze
    var end_game = document.getElementbyId("end");
    end_game.onmouseover = message; 
};

//Glows red on hover
function overAllBoundary() {
    loser = true; 
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].addClassName = ("youlose");
    }
}

//Alert Messages
function message() {
    if (!loser)
    {
        document.getElementbyId("status").innerHTML = ("Yay, you won! :]");
    } 
    else
    {
        document.getElementbyId("status").innerHTML = ("Sorry, you lost. Try Again :[");
    }
}

//Click event; walls and game reset
function clickStart() {
    loser = false;
    document.getElementbyId("status").innerHTML = (" Click \"S\" to begin and find the end!"); 
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++)
    {
        boundaries[i].removeClassName("youlose");
    }
}

//Anti-Cheating function
document.onmouseover = function (val){
    var maze=document.getElementById("maze");

    var top = maze.offsetTop;
    var bottom = maze.offsetBottom;
    var left = maze.offsetLeft;
    var right = maze.offsetRight;
    var height = maze.offsetHeight;
    var width = maze.offsetWidth;
    var x = val.clientX;
    var y = val.clientY;

    var boundaries = document.querySelectorAll("div#maze div.boundary");


  if((y<top)||(y>bottom)||(x<left)||(x>right))
  {
    for (var i = 0; i < boundaries.length; i++)
    {
      boundaries[i].removeClassName("youlose");
      document.getElementbyId("status").innerHTML = ("Sorry, You Lose!:[");
    }
      
    }

};
