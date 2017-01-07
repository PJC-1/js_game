console.log("sanity check");

var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

var xPos = 60;
var yPos = 90;
var width = 50;
var height = 50;

function drawFrame(){
    // clearRect will clear the canvas
    ctx.clearRect(0,0,300,300)
    ctx.fillStyle="blue";
    ctx.fillRect(xPos, yPos, width, height)
    xPos++;
    yPos++;
}

// The setInterval() method calls a function or evaluates an expression at 
// specified intervals (in milliseconds).
window.setInterval(drawFrame, 100)
