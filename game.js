console.log("sanity check");

var myCanvas = document.getElementById("myCanvas");
// The HTMLCanvasElement.getContext() method returns a drawing context on the
// canvas, or null if the context identifier is not supported.
// "2d", leading to the creation of a CanvasRenderingContext2D object
// representing a two-dimensional rendering context.
var ctx = myCanvas.getContext("2d");

var xPos = 60;
var yPos = 90;
var width = 50;
var height = 50;

function drawFrame(){
    // The clearRect() method clears the specified pixels within a given rectangle.
    // syntax: context.clearRect(x,y,width,height)
    ctx.clearRect(0,0,300,300)
    // The fillStyle property sets or returns the color, gradient, or pattern
    // used to fill the drawing.
    ctx.fillStyle="blue";
    // The fillRect() method draws a "filled" rectangle. The default color of the fill is black.
    // syntax: context.fillRect(x,y,width,height);
    ctx.fillRect(xPos, yPos, width, height)
    xPos++;
    yPos++;
}

// The setInterval() method calls a function or evaluates an expression at
// specified intervals (in milliseconds).
window.setInterval(drawFrame, 100)
