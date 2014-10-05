var canvas = document.getElementById("myCanvas");

if(canvas.getContext){
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);
    ctx.strokeRect(0,0,150,75);
    // ctx.clearRect(0,0,150,75);
} else {
    "Sorry, your browser is unable to display HTML5 Canvas."
}

function drawSmiley() {
  console.log("I am inside draw smiley function");
  var canvas_triangle = document.getElementById('canvasSmiley');
  if (canvas_triangle.getContext){
    var ctx = canvas_triangle.getContext('2d');

    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke();
  }
}

function drawTriangle() {
  console.log("I am inside draw triangle function");
  var canvas = document.getElementById('canvasTriangle');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(105,25);
    ctx.lineTo(25,105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawThings() {
  drawTriangle();
  drawSmiley();
}

window.onload = drawThings;
