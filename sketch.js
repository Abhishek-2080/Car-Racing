var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;

var distance = 0;
var car1,car2,car3,car4;
var cars;
var trackImage, car1Image, car2Image, car3Image, car4Image, groundImage;

function preload(){

  trackImage = loadImage("../images/track.png");
  car1Image = loadImage("../images/car1.png");
  car2Image = loadImage("../images/car2.png");
  car3Image = loadImage("../images/car3.png");
  car4Image = loadImage("../images/car4.png");
  groundImage = loadImage("../images/ground.png");
}

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight -30);

  database = firebase.database();


 
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4){
    game.update(1);

  }

  if(gameState === 1){
    clear();
    game.play();
  }



}
