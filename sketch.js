var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 40,100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(600,200,100,40);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 && fixedRect.x - movingRect.x <= fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}