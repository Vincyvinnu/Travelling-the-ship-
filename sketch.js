var sea, seaImg, edges;
var shipImg1;

function preload(){
 seaImg = loadImage("sea.png");
 shipImg1 = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
  sea.addImage("sea", seaImg);
  sea.X = sea.width/2;

  shipImg1 = createSprite(50,100,40,20)
  shipImg1.addAnimation("ship-1");
  edges = createEdgeSprites();
}

function draw() {
  background("blue");
  
 sea.velocityX = -2;
 console.log(sea.x);

  if (sea.x<0){
    sea.x = sea.width/2
  }
 console.log(ship.y)
}