//** Variables **********
//Background
var sky = "images/blueSky.png";

//** Preload *************
function preload() {
  skyBackground = loadImage(sky);
}

//** Setup *************
function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("mainMenu-div");
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
} // function setup

//** Draw ****************
function draw() {
  background(skyBackground);
} // function draw

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function play() {
  window.location = "field.html";
}
