/*
INFO2180 Lab 4- MAZE
Taje Carter
620079694 
*/

"use strict";
var loser = false; //If user hits a wall; loses

window.onload = function() {
    var boundaries = [];
    boundaries = document.querySelectorAll("div#maze div.boundary");
    for(var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].onmouseover = overAllBoundary;
    }

    // Starts game; resets walls
    var game_start = document.getElementById("start");
    game_start.onclick = clickStart;

    // Alerts completion of maze
    var end_game = document.getElementById("end");
    end_game.onmouseover = message; 
};

//Glows red on hover
function overAllBoundary(event) {

    if(loser == false)
    {
        loser = true; 
        var boundaries = [];
        boundaries = document.querySelectorAll("div#maze div.boundary");
        for(var i = 0; i < boundaries.length; i++) 
        {
            boundaries[i].classList.add("youlose");
        }
        event.stopPropagation(); 
        return false;
    }
}

//Alert Messages
function message() {
    if(!loser)
    {
        document.getElementById("status").innerHTML = ("Yay, you won! :]");
    } 
    else
    {
        document.getElementById("status").innerHTML = ("Sorry, you lost. Try Again :[");
    }
}

//Click event; walls and game reset
function clickStart() {
    loser = false;
    var boundaries = [];
    document.getElementById("status").innerHTML = "Click \"S\" to begin and find the end!"; 
    boundaries = document.querySelectorAll("div#maze div.boundary");
    for(var i = 0; i < boundaries.length; i++)
    {
        boundaries[i].classList.remove("youlose");
    }
}


//Anti-Cheating function
 document.maze.onmouseover = function(event){
    var maze = document.getElementById("maze");

    var top = maze.offsetTop;
    var bottom = maze.offsetBottom;
    var left = maze.offsetLeft;
    var right = maze.offsetRight;
    var height = maze.offsetHeight;
    var width = maze.offsetWidth;
    var x = event.clientX;
    var y = event.clientY;

    var boundaries = document.querySelectorAll("div#maze div.boundary");


    if((y<top)||(y>bottom)||(x<left)||(x>right))
    {
        for (var i = 0; i < boundaries.length; i++)
        {
          boundaries[i].classList.remove("youlose");
          document.getElementById("status").innerHTML = ("Sorry, You Lose!:[");
        }
      
    }

};
