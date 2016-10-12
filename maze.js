/*
INFO2180 Lab 4- MAZE
Taje Carter
620079694 
*/


window.onload = function() {
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = "#ff8888";
    }
}