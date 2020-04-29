//** Variables **********
var sky = "images/blueSky.png";

var playerIdle1 = "images/playerIdle1.png";
var playerIdle2 = "images/playerIdle2.png";
var playerIdle3 = "images/playerIdle3.png";
var playerIdle;

function preload() {
  skyBackground = loadImage(sky);
}

//** Canvas *************
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

  player = createSprite(window.innerWidth/8, window.innerHeight/5, 100, 100);
  player.addAnimation("idle", playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3);
  player.addAnimation("run", playerIdle1);

} // function setup

//** Draw ****************
function draw() {
	background(skyBackground);
	drawSprites();

  // Player Movements
  if(keyIsDown(39)) { // right arrow key
    player.changeAnimation("run");
    player.velocity.x = 5;
  }
  else if (keyisDown(37)) { // left arrow key
    player.velocity.x -= 5;
  }
  else {
    player.changeAnimation("idle");
    player.velocity.x = 0;
  }

} // function draw
