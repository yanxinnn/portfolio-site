//** Variables **********
var sky = "images/blueSky.png";

var playerIdle1 = "images/playerIdle1.png";
var playerIdle2 = "images/playerIdle2.png";
var playerIdle3 = "images/playerIdle3.png";
var playerIdle;

function preload() {
  skyBackground = loadImage(sky);

  // Player Animations
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
}

//** Canvas *************
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

  // Player Animations
  playerIdle.frameDelay = 2;

  player = createSprite(window.innerWidth/8, window.innerHeight/5, 100, 100);
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerIdle);

} // function setup

//** Draw ****************
function draw() {
	background(skyBackground);
	drawSprites();

  // Player Movements
  if (keyIsDown(RIGHT_ARROW || "D")) {
    player.changeAnimation("run");
    player.velocity.x = 3;
  }
  else if (keyIsDown(LEFT_ARROW || "A")) {
    player.velocity.x = -3;
  }
  else {
    player.changeAnimation("idle");
    player.velocity.x = 0;
  }

} // function draw

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
