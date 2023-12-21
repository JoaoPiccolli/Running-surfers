var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

  function preload(){
  pathImg = loadImage("path.png");
  
  boyImg = loadAnimation ("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.PNG", "Jake5.png");
 }

function setup(){
  
  createCanvas(400,400);
path = createSprite(400, 400);
path.addImage(pathImg);
path.velocityY = 10;
path.scale = 1.2;

boy = createSprite(200, 200);
boy.addAnimation("correndo", boyImg);
boy.scale = 0.6;
  
//crie um limite à esquerda
leftBoundary = createSprite(0,0,100,800);
leftBoundary.visibility = false;

//crie um limite à direita
rightBoundary = createSprite(410,0,100,800);
rightBoundary.visibility = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
