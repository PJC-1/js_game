console.log("sanity check");

var myCanvas = document.getElementById("myCanvas");
// The HTMLCanvasElement.getContext() method returns a drawing context on the
// canvas, or null if the context identifier is not supported.
// "2d", leading to the creation of a CanvasRenderingContext2D object
// representing a two-dimensional rendering context.
var ctx = myCanvas.getContext("2d");

//////////////
// GOOD GUY //
//////////////

var goodGuyXPos   =  60;
var goodGuyYPos   =  90;
var goodGuyWidth  =  50;
var goodGuyHeight =  50;

/////////////
// BAD GUY //
/////////////

var badGuyXPos   =  10;
var badGuyYPos   =  10;
var badGuyWidth  =  10;
var badGuyHeight =  10;


// the drawFrame function is the main function for the game and is used in the
// setInterval which will fire drawFrame at an interval of 100 (milliseconds).
function drawFrame(){
    // The clearRect() method clears the specified pixels within a given rectangle.
    // syntax: context.clearRect(x,y,width,height)
    ctx.clearRect(0,0,300,300)
    // The fillStyle property sets or returns the color, gradient, or pattern
    // used to fill the drawing.
    ctx.fillStyle="blue";
    // The fillRect() method draws a "filled" rectangle. The default color of the fill is black.
    // syntax: context.fillRect(x,y,width,height);
    ctx.fillRect(goodGuyXPos, goodGuyYPos, goodGuyWidth, goodGuyWidth);
    ctx.fillStyle="purple";
    ctx.fillRect(badGuyXPos, badGuyYPos, badGuyWidth, badGuyHeight);
    badGuyYPos += 10;


    // bad-guy y-axis boundries
    if(badGuyYPos > 300){
       badGuyYPos = 0;
       badGuyXPos = Math.random()*300;
    }

    // good-guy x-axis boundries
    if(goodGuyXPos < 9){
        goodGuyXPos = 12;
    }
    if(goodGuyXPos > 240){
        goodGuyXPos = 237;
    }
    // good-guy y-axis boundries
    if(goodGuyYPos < 9){
        goodGuyYPos = 12;
    }
    if(goodGuyYPos > 240){
        goodGuyYPos = 237;
    }
    // detect for collision
    checkCollisions(goodGuyXPos, goodGuyYPos, goodGuyWidth, goodGuyWidth, badGuyXPos, badGuyYPos, badGuyWidth, badGuyHeight);

}

/////////////////////////
// COLLISION DETECTION //
/////////////////////////

function checkCollisions(goodGuyXPos, goodGuyYPos, goodGuyWidth, goodGuyWidth, badGuyXPos, badGuyYPos, badGuyWidth, badGuyHeight) {
     if (goodGuyXPos < badGuyXPos + badGuyWidth &&
       goodGuyXPos + goodGuyWidth > badGuyXPos &&
       goodGuyYPos < badGuyYPos + badGuyHeight &&
       goodGuyHeight+ goodGuyYPos > badGuyYPos) {
        console.log("they hit each other!!!");
        return true;
     }
     else{
        return false
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
