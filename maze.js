/*Taje Carter
620079694 
*/



window.onload = function() {
    $("boundary1").onmouseover = overBoundary;
};

function overBoundary() {
    // $("boundary1").style.backgroundColor = "#ff8888";
    $("boundary1").addClassName("youlose");
}