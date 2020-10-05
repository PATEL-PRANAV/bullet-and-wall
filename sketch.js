var bullet,wall,thinkness;

var speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);

  speed=random(223,321);
  weight=random(400,1500);
  thinkness=random(22,83);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thinkness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
if (wall.x-bullet.x<wall.width/2+bullet.width/2) {
  bullet.velocityX=0;
  damage=0.5*weight*speed*speed/thinkness*thinkness*thinkness
  if (damage<10) {
    bullet.shapeColor="green";
  }
  
  if (damage>10) {
    bullet.shapeColor="red";
  }
}


  drawSprites();
}