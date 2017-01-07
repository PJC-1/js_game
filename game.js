console.log("sanity check");

var myCanvas = document.getElementById("myCanvas");
// The HTMLCanvasElement.getContext() method returns a drawing context on the
// canvas, or null if the context identifier is not supported.
// "2d", leading to the creation of a CanvasRenderingContext2D object
// representing a two-dimensional rendering context.
var ctx = myCanvas.getContext("2d");

var goodGuyXPos = 60;
var goodGuyYPos = 90;
var goodGuywidth = 50;
var goodGuyheight = 50;

function drawFrame(){
    // The clearRect() method clears the specified pixels within a given rectangle.
    // syntax: context.clearRect(x,y,width,height)
    ctx.clearRect(0,0,300,300)
    // The fillStyle property sets or returns the color, gradient, or pattern
    // used to fill the drawing.
    ctx.fillStyle="blue";
    // The fillRect() method draws a "filled" rectangle. The default color of the fill is black.
    // syntax: context.fillRect(x,y,width,height);
    ctx.fillRect(goodGuyXPos, goodGuyYPos, goodGuywidth, goodGuyheight)
    // x-axis boundries
    if(goodGuyXPos < 9){
        goodGuyXPos = 12;
    }
    if(goodGuyXPos > 240){
        goodGuyXPos = 237;
    }
    // y-axis boundries
    if(goodGuyYPos < 9){
        goodGuyYPos = 12;
    }
    if(goodGuyYPos > 240){
        goodGuyYPos = 237;
    }
}

function moveBlock(event){
    // left
    if(event.keyCode === 37){
        goodGuyXPos -= 10;
    }
    // right
    if(event.keyCode === 39){
        goodGuyXPos += 10;
    }
    // up
    if(event.keyCode === 38){
        goodGuyYPos -= 10;
    }
    // down
    if(event.keyCode === 40){
        goodGuyYPos += 10;
    }
}


// The setInterval() method calls a function or evaluates an expression at
// specified intervals (in milliseconds).
window.setInterval(drawFrame, 100)

// The document.addEventListener() method attaches an event handler to the document.
// It takes to arguments, an event to listen for and a function to execute
window.addEventListener("keydown", moveBlock)
