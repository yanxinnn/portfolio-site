//** Variables **********

//Background
var sky = "images/blueSky.png";

// Player Animation
var playerIdleRight1 = "images/player/playerIdleRight1.png";
var playerIdleRight2 = "images/player/playerIdleRight2.png";
var playerIdleRight3 = "images/player/playerIdleRight3.png";
var playerIdleRight;
var playerRunRight1 = "images/player/playerRunRight1.png";
var playerRunRight2 = "images/player/playerRunRight2.png";
var playerRunRight3 = "images/player/playerRunRight3.png";
var playerRunRight4 = "images/player/playerRunRight4.png";
var playerRunRight;
var playerIdleLeft1 = "images/player/playerIdleLeft1.png";
var playerIdleLeft2 = "images/player/playerIdleLeft2.png";
var playerIdleLeft3 = "images/player/playerIdleLeft3.png";
var playerIdleLeft;
var playerRunLeft1 = "images/player/playerRunLeft1.png";
var playerRunLeft2 = "images/player/playerRunLeft2.png";
var playerRunLeft3 = "images/player/playerRunLeft3.png";
var playerRunLeft4 = "images/player/playerRunLeft4.png";
var playerRunLeft;

// Widgets
var fullscreen1 = "images/widgets/fullscreenIcon1";
var fullscreen2 = "images/widgets/fullscreenIcon2";
var fullscreenIsOff;
var fullscreenIsOn;

//** Preload *************
function preload() {
  skyBackground = loadImage(sky);

  // Player Animations
  playerIdleRight = loadAnimation(playerIdleRight1, playerIdleRight2, playerIdleRight1, playerIdleRight3, playerIdleRight1, playerIdleRight3);
  playerRunRight = loadAnimation(playerRunRight1, playerRunRight2, playerRunRight3, playerRunRight2, playerRunRight1, playerRunRight4, playerRunRight3, playerRunRight2);
  playerIdleLeft = loadAnimation(playerIdleLeft1, playerIdleLeft2, playerIdleLeft1, playerIdleLeft3, playerIdleLeft1, playerIdleLeft3);
  playerRunLeft = loadAnimation(playerRunLeft1, playerRunLeft2, playerRunLeft3, playerRunLeft2, playerRunLeft1, playerRunLeft4, playerRunLeft3, playerRunLeft2);

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

  player = createSprite(window.innerWidth/8, window.innerHeight/5, 100, 100);
  player.addAnimation("idleRight", playerIdleRight);
  player.addAnimation("runRight", playerRunRight);
  player.addAnimation("idleLeft", playerIdleLeft);
  player.addAnimation("runLeft", playerRunLeft);

  // Widgets
  widget = createSprite(window.innerWidth/20, window.innerHeight/15, 30, 30);
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

  // Player Movements
  player.changeAnimation("idle");
  player.velocity.x = 0;
  player.velocity.y = 0;

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    player.changeAnimation("run");
    player.velocity.x = 5.5;
  }
  else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
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
