//** Variables **********

//Background
var sky = "images/blueSky.png";

// Player Animation
var lastKey = "right";
var playerIdle1 = "images/player/playerIdle1.png";
var playerIdle2 = "images/player/playerIdle2.png";
var playerIdle3 = "images/player/playerIdle3.png";
var playerIdle;
var playerRun1 = "images/player/playerRun1.png";
var playerRun2 = "images/player/playerRun2.png";
var playerRun3 = "images/player/playerRun3.png";
var playerRun4 = "images/player/playerRun4.png";
var playerRun;

// Widgets
var fullscreen1 = "images/widgets/fullscreenIcon1.png";
var fullscreen2 = "images/widgets/fullscreenIcon2.png";
var fullscreenIsOff;
var fullscreenIsOn;

//** Preload *************
function preload() {

  skyBackground = loadImage(sky);

  // Player Animations
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
  playerRun = loadAnimation(playerRun1, playerRun2, playerRun3, playerRun2, playerRun1, playerRun4, playerRun3, playerRun2);

  // Widgets
  fullscreenIsOff = loadImage(fullscreen1);
  fullscreenIsOn = loadImage(fullscreen2);

}

//** Setup *************
function setup() {

	createCanvas(window.innerWidth, window.innerHeight);

  // Player Animations
  playerIdle.frameDelay = 18;
  playerRun.frameDelay = 15;

  player = createSprite(window.innerWidth/8, window.innerHeight * 4 / 7, 100, 100);
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerRun);

  // Widgets
  widget = createSprite(window.innerWidth * 17 / 20, window.innerHeight / 15, 30, 30);
  widget.addAnimation("isOff", fullscreenIsOff);
  widget.addAnimation("isOn", fullscreenIsOn);
  widget.onMousePressed = function() {
    widget.changeAnimation("isOn");
  }


} // function setup

//** Draw ****************
function draw() {
  console.log(playerIdle.frameDelay);
	background(skyBackground);
	drawSprites();

  player.changeAnimation("idle");

  // Player Movements
  player.changeAnimation("idle");
  if (lastKey == "right") {
    player.mirrorX(1);
  }
  else if (lastKey == "left") {
    player.mirrorX(-1);
  }
  player.velocity.x = 0;
  player.velocity.y = 0;

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    lastKey = "right";
    player.changeAnimation("run");
    player.velocity.x = 5.5;
  }
  else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    lastKey = "left";
    player.changeAnimation("run");
    player.velocity.x = -5.5;
  }
  // else if (keyIsDown(32)) { // spacebar jump
  //   player.changeAnimation("idle");
  //   player.velocity.y =
  // }
  // else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
  //   player.changeAnimation("run");
  //   player.velocity.y = -5.5;
  // }
  // else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
  //   player.changeAnimation("run");
  //   player.velocity.y = 5.5;
  // }

  // Widgets


} // function draw

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
