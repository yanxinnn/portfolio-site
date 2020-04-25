//** Variables **********
// let playerIdle1 = "images/player_idle1.png";
// let playerIdle2 = "images/player_idle2.png";
// let playerIdle3 = "images/player_idle3.png";
// let playerIdleSet = [playerIdle1, playerIdle2, playerIdle1, playerIdle3, playerIdle1, playerIdle3];
// let playerIdle = [];
// let playerIdleFrame = 0;

function preload() {
	//for (var i = 0; i < playerIdleSet.length; i++) {
		//console.log(playerIdleSet[i]);
		//playerIdle[i] = loadImage(playerIdleSet[i]);
	//}
	var test = loadImage("images/playerIdle1.png");
}

//** Canvas *************
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
} // function setup

//** Draw ****************
function draw() {
	background(0);

	// // Animations
	image(test, window.innerWidth/2, window.innerHeight/2);
	// image(playerIdle[playerIdleFrame], window.innerWidth/2, window.innerHeight/2);
	//
	// frameNumber++;
	// if (frameNumber % 20) {
	// 	playerIdleFrame += 1;
	// }
	//
	// if (playerIdleFrame >= playerIdleSet.length - 1) {
	// 	playerIdleFrame == 0;
	// }


} // function draw
