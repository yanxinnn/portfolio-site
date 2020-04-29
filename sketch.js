//** Variables **********
var sky = "images/blueSky.png";

var playerIdle1 = "images/playerIdle1.png";
var playerIdle2 = "images/playerIdle2.png";
var playerIdle3 = "images/playerIdle3.png";
var playerIdle;

function preload() {
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle3);
  skyBackground = loadImage(sky);
	//playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
}

//** Canvas *************
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

} // function setup

//** Draw ****************
function draw() {
	background(skyBackground);



	animation(playerIdle, window.innerWidth/2, window.innerHeight/2);

} // function draw
