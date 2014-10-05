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

function draw() {
  console.log("I am inside draw function");
  var canvas_triangle = document.getElementById('canvasTriangle');
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
window.onload = draw;
