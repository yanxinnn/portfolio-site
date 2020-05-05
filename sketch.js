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
var jump = false;

// Widgets
var snd_windyPetals;

// Environment
var platforms;
var groundTop;
var groundBot;
var grass;
var dirt;

//** Preload *************
function preload() {

  skyBackground = loadImage(sky);

  // Player Animations
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
  playerRun = loadAnimation(playerRun1, playerRun2, playerRun3, playerRun2, playerRun1, playerRun4, playerRun3, playerRun2);

  // Widgets
  snd_windyPetals = loadSound("sounds/windyPetals.mp3");

  // Environment
  grass = loadAnimation("images/environment/grass.png");
  dirt = loadAnimation("images/environment/dirt.png");

}

//** Setup *************
function setup() {

	createCanvas(window.innerWidth, window.innerHeight);
  var staticWindowWidth = window.innerWidth;

  // Player Animations
  playerIdle.frameDelay = 20;
  playerRun.frameDelay = 15;

  player = createSprite(staticWindowWidth/8, window.innerHeight-300, 100, 100);
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerRun);

  var platformsAcross = Math.floor((staticWindowWidth / 100)) + 1;
  platforms = new Group();
  for (i = 0; i < platformsAcross; ++i) {
    groundTop = createSprite(i * 100, window.innerHeight-200, 100, 100);
    groundTop.addAnimation("grass", grass);
    platforms.add(groundTop);
  }
  for (i = 0; i < platformsAcross; ++i) {
    groundBot = createSprite(i * 100, window.innerHeight-100, 100, 100);
    groundBot.addAnimation("dirt", dirt);
    platforms.add(groundBot);
  }

} // function setup

//** Draw ****************
function draw() {

  background(skyBackground);

  // Player Movements
  if (!jump) {
    player.changeAnimation("idle");
  }
  player.velocity.x = 0;
  if (lastKey == "right") {
    player.mirrorX(1);
  }
  else if (lastKey == "left") {
    player.mirrorX(-1);
  }
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
  else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    if (!jump) {
      player.changeAnimation("idle");
      player.velocity.y = -8;
      jump = true;
    }
  }
  // if (jump) {
  //   player.changeAnimation("idle");
  //   player.velocity.y += 5;
  // }
  // while (groundTop.overlapPixel(player.position.x, player.position.y+100)) {
  //   player.position.y--;
  //   player.velocity.y = 0;
  //   jump = false;
  // }

  drawSprites();

} // function draw

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

var sound = document.getElementById('sound');
sound.onclick = function() {
  if (sound.checked) {
    snd_windyPetals.loop();
  }
  else {
    snd_windyPetals.stop();
  }
};
