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
        boundaries[i].classList.add = ("youlose");
    }
}

//Alert Messages
function message() {
    if (!loser)
    {
        document.getElementbyId("status").innerHTML = ("Yay, you won! :]")
    } 
    else
    {
        document.getElementbyId("status").innerHTML = ("Sorry, you lost. Try Again :[");
    }
}

//Click event; walls and game reset
function clickStart() {
    loser == false;
    document.getElementbyId("status").innerHTML = ("Find the end!"); 
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++)
    {
        boundaries[i].classList.remove("youlose");
    }
}
