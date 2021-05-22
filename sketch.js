
var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 50);
  fixedRect = createSprite(600, 200, 100,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

function draw() {
  background(0);  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)
  {
    textSize(20);
    text ("The 2 rectangles touched", 250,200);
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  
  drawSprites();
}