var rocket,rocketimg;
var space,spaceimg;
var ast2,ast1,ast,astrand,astrand1,astgrp,bh;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,planet;
var sun;
var prand1,prand;
var score=0;
var PLAY=1;
var END=0;
var START=2;
var state=START;
var sound;
var pgrp;



function preload(){
rocketimg=loadImage("rocket-removebg-preview.png");
spaceimg=loadImage("SPACE.jpg");
ast2=loadImage("asteroid-removebg-preview.png");
ast1=loadImage("asteroid1-removebg-preview.png");
bh=loadImage("comets-removebg-preview.png");
sun=loadImage("sun-removebg-preview.png");
mercury=loadImage("mercury-removebg-preview.png");
venus=loadImage("venus-removebg-preview.png");
earth=loadImage("earth-removebg-preview.png");
mars=loadImage("mars-removebg-preview.png");
jupiter=loadImage("jupiter-removebg-preview.png");
saturn=loadImage("saturn-removebg-preview.png");
uranus=loadImage("uranus-removebg-preview.png");
neptune=loadImage("neptune-removebg-preview.png");
sound=loadSound("spacesounds.wav");


}

function setup() {
createCanvas(550,500);

space=createSprite(275,250,550,500);
space.addImage(spaceimg);
space.velocityY=10;
 
  
rocket=createSprite(275,455,20,20);
rocket.addImage(rocketimg);
rocket.scale=0.8;
rocket.setCollider("circle",0,-70,30);



astgrp = new Group();
pgrp = new Group();
}

function draw() {
background("white");
if (space.y>550){
    space.y=300/2;
  }
  
 if(state==START){
   background("lightgrey");
   textSize(20);
   stroke("red");
   fill("yellow")
    text("WELCOME TO ROCKET FIRE!!!",120,200);
   text("THIS GAME IS MADE BY AGASTYA JAIN!!!",50,220);
   text("PLEASE CLICK R TO PLAY THIS GAME!!",80,240);
   if(keyDown("r")){
     state=PLAY;
   }
  }
  else if (state==PLAY){
    background("white");
if (space.y>550){
    space.y=300/2;
  }
   drawSprites();
spawnAsteroids();  
spawnPlanets();
move();
score=score+1;
textSize(20);
fill("white");
stroke("black");
text("SCORE:  "+   score,20,30); 
sound.play();
  if(rocket.isTouching(astgrp)){
    state=END;
  }
    if(rocket.isTouching(pgrp)){
    score=score+50;
  }
  }
  
  else if(state==END){
   textSize(20);
fill("white");
stroke("black");
text("GAME OVER!!! YOU LOST!!!PRESS R TO REPLAY!!!",20,250); 
    score=0;
if(keyDown("r")){
     state=PLAY;
   }
  }
 
  



}

function move(){
  if(keyDown("up")){
    rocket.y=rocket.y-20;
  }
   if(keyDown("down")){
    rocket.y=rocket.y+20;
  }
   if(keyDown("left")){
    rocket.x=rocket.x-20;
  }
   if(keyDown("right")){
    rocket.x=rocket.x+20;
  }
}

function spawnAsteroids(){
if(frameCount%60==0){
ast=createSprite(astrand1,20,20,20);
ast.velocityY=10;
astrand=Math.round(random(1,3));
astrand1=Math.round(random(200,500));  
ast.lifetime=100;
ast.scale=0.5;
astgrp.add(ast);
rocket.depth=astgrp.depth+1;
switch(astrand){
  case 1:ast.addImage("ast1",ast1);
    break;
  case 2:ast.addImage("ast2",ast2);
    break;
    case 3:ast.addImage("bh",bh);
    break;
}
}

  
}

function spawnPlanets(){
if(frameCount%200==0){
planet=createSprite(prand1,20,20,20);
prand=Math.round(random(1,9));
prand1=Math.round(random(200,500));  
planet.velocityY=10;
planet.lifetime=100;
planet.scale=0.8;
planet.depth=astgrp.depth+5;  
rocket.depth=planet.depth+5; 
pgrp.add(planet);
switch(prand){
  case 1:planet.addImage(mercury) ;
    break;
     case 2:planet.addImage(sun) ;
    break;
     case 3:planet.addImage(venus) ;
    break;
     case 4:planet.addImage(earth) ;
    break;
     case 5:planet.addImage(mars) ;
    break;
     case 6:planet.addImage(jupiter) ;
    break;
     case 7:planet.addImage(saturn) ;
    break;
     case 8:planet.addImage(uranus) ;
    break;
     case 9:planet.addImage(neptune) ;
    break;
}
}  
}

