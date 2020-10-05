
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var PLAY=1;
var END=0;
var gameState=1

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  score=0;
}



function setup() {
  createCanvas(600,200)
  monkey = createSprite(50,160,20,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15
  ground = createSprite(200,195,1200,20);
  ground.x = ground.width/2;
  bananaGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
  background("white")
  if(gameState === PLAY){
    ground.velocityX= -4
     if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if (keyDown("space")){
      monkey.velocityY = -12;
      
    }
    monkey.velocityY = monkey.velocityY + 0.8 ;
   if (frameCount%60===0){
      banana=createSprite(500,50,100,100);
      banana.velocityX = -4; 
     
     banana.addImage("banana.png",bananaImage);
     banana.scale=0.1;
     banana.lifetime=300;
     bananaGroup.add(banana);
    }
    if (bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
      score= score+1;
    }
    if (frameCount%80===0){
      obstacle=createSprite(500,160,200,200);
      obstacle.addImage("obstacle.png",obstacleImage);
      obstacle.scale=0.17;
      obstacle.velocityX=-4;
      obstacleGroup.add(obstacle);
    }
    console.log(frameCount)
    if (monkey.isTouching(obstacleGroup)){
      gameState="END";
      score=0;
    }
  }
  if (gameState=== "END"){
    fill("red");
    textSize(30);
    text("GAME OVER",200,150);
    ground.setVolcityXEach=0
    bananaGroup.setVolcityXEach=0
    obstacleGroup.setVolcityXEach=0
  }
  
  
  
  
  monkey.collide(ground);
  drawSprites();
}






