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
var snd_windyPetals;

// Environment
var grass;

//** Preload *************
function preload() {

  skyBackground = loadImage(sky);

  // Player Animations
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
  playerRun = loadAnimation(playerRun1, playerRun2, playerRun3, playerRun2, playerRun1, playerRun4, playerRun3, playerRun2);

  // Widgets
  snd_windyPetals = loadSound("sounds/windyPetals.mp3");

}

//** Setup *************
function setup() {

	createCanvas(window.innerWidth, window.innerHeight);
  var staticWindowWidth = window.innerWidth;
  var staticWindowHeight = window.innerHeight;

  // Player Animations
  playerIdle.frameDelay = 20;
  playerRun.frameDelay = 15;

  player = createSprite(staticWindowWidth/8, staticWindowHeight * 4 / 7, 100, 100);
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerRun);

  // Environment
  for (i = 0; i < 5; ++i) {
    grass = createSprite(staticWindowWidth/9 + (i * 30), staticWindowHeight * 6 / 7, 30, 30);
    grass.addAnimation("images/environment/grass.png");
  }

} // function setup

//** Draw ****************
function draw() {
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
    player.velocity.x = 5;
  }
  else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    lastKey = "left";
    player.changeAnimation("run");
    player.velocity.x = -5;
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

var sound = document.getElementById('un-mute');
sound.onclick = function() {
  if (sound.checked) {
    snd_windyPetals.loop();
  }
  else {
    snd_windyPetals.stop();
  }
};
