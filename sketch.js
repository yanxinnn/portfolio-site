//** Variables **********
var sky = "images/blueSky.png";

var playerIdle1 = "images/playerIdle1.png";
var playerIdle2 = "images/playerIdle2.png";
var playerIdle3 = "images/playerIdle3.png";
var playerIdle;
var playerRun1 = "images/playerRun1.png";
var playerRun2 = "images/playerRun2.png";
var playerRun3 = "images/playerRun3.png";
var playerRun4 = "images/playerRun4.png";
var playerRun;

function preload() {
  skyBackground = loadImage(sky);

  // Player Animations
  playerIdle = loadAnimation(playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
  playerRun = loadAnimation(playerRun1, playerRun2, playerRun3, playerRun2, playerRun1, playerRun4, playerRun3, playerRun2);
}

//** Canvas *************
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

  // Player Animations
  playerIdle.frameDelay = 10;

  player = createSprite(window.innerWidth/8, window.innerHeight/5, 100, 100);
  player.addAnimation("idle", playerIdle);
  player.addAnimation("run", playerRun);

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

  if (keyIsDown(RIGHT_ARROW) || event.key == 68) {
    player.changeAnimation("run");
    player.velocity.x = 3.5;
  }
  else if (keyIsDown(LEFT_ARROW) || event.key == 65) {
    player.changeAnimation("run");
    player.velocity.x = -3.5;
  }
  if (keyIsDown(UP_ARROW) || event.key == 87) {
    player.changeAnimation("run");
    player.velocity.y = 3.5;
  }
  else if (keyIsDown(DOWN_ARROW) || event.key == 83) {
    player.changeAnimation("run");
    player.velocity.y = -3.5;
  }

} // function draw

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
