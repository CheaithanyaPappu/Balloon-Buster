var backgroundimage;

var back;

var redballon,greenballoon,pinkballoon,blueballoon,redimage,greenimage,pinkimage,blueimage;

var bow,bowimage;

var arrow,arrowimage

var score;

var redG,greenG,pinkG,blueG,arrowG


function preload(){

backgroundimage = loadImage ("background0.png"); 
redimage = loadImage ("red_balloon0.png");
pinkimage = loadImage ("pink_balloon0.png"); 
blueimage = loadImage ("blue_balloon0.png"); 
greenimage = loadImage ("green_balloon0.png");  

bowimage = loadImage ("bow0.png");  
  
arrowimage = loadImage ("arrow0.png");  
}

function setup() {
  createCanvas(600, 600);
back = createSprite (0,0,600,600);
back.addImage (backgroundimage);

 back.scale = 3; 
back.velocityX = -2;
  
score=0;
   
bow = createSprite (550,570,20,20);
bow.scale = 1.5;  
bow.addImage (bowimage);  
  
redG = new Group ();  
blueG = new Group ();    
greenG = new Group ();  
pinkG = new Group (); 
arrowG = new Group ();    
}


function draw() {
background ("white");  
if ( back.x < 0 ) { 
 back.x = back.width /2
} 

bow.y = mouseY;
  
if (keyDown("space")) {
 createarrow (); 
 
} 
 
 
  
//generating a random number
  
var rand = Math.round(random(1,4))
if (frameCount%100===0) {


console.log(rand)
switch(rand) {

  case 1:redB();
    break;
    
    case 2: greenB();
    break;
    
    case 3: blueB();
    break;
    
    case 4: pinkB();
    break;
    default: break;    
}
} 
  
if (arrowG.isTouching(redG)) {
redG.destroyEach();
 arrowG.destroyEach();
  score=score+1; 
}  
  
if (arrowG.isTouching(blueG)) {
blueG.destroyEach();
 arrowG.destroyEach();
  score=score+1; 
}
  
if (arrowG.isTouching(pinkG)) {
pinkG.destroyEach();
 arrowG.destroyEach();
  score=score+1; 
}    

  if (arrowG.isTouching(greenG)) {
greenG.destroyEach();
 arrowG.destroyEach();
  score=score+1; 
}  
  
drawSprites(); 
 textSize(20);
  text("Score:"+ score,270,30); 

}

function createarrow () {
  
arrow = createSprite ( 550,200,20,20);
arrow.addImage (arrowimage);    
  
 arrow.scale = 0.5; 
  
 arrow.velocityX = -4; 
 
 arrow.y = bow.y; 
arrow.lifetime = 600/4; 
  arrowG.add(arrow);  
}  
  


function redB () {
redballoon = createSprite (0,0,20,20);
redballoon.addImage (redimage); 
redballoon.scale = 0.1;
redballoon.y = random (35,550);
  redballoon.velocityX = 4;
  redballoon.lifetime = 600/4
  redG.add(redballoon);
}
function pinkB () {
pinkballoon = createSprite (0,0,20,20);
pinkballoon.addImage (pinkimage); 
pinkballoon.scale = 1.5;
pinkballoon.y = random (35,550);
pinkballoon.velocityX = 4;
 pinkballoon.lifetime = 600/4 
  pinkG.add(pinkballoon);
}

function blueB () {
blueballoon = createSprite (0,0,20,20);
blueballoon.addImage (blueimage); 
blueballoon.scale = 0.1;
blueballoon.y = random (35,550);
blueballoon.velocityX = 4;
blueballoon.lifetime = 600/4  
  blueG.add(blueballoon);
}

function greenB () {
greenballoon = createSprite (0,0,20,20);
greenballoon.addImage (greenimage); 
greenballoon.scale = 0.1;
greenballoon.y = random (35,550);
greenballoon.velocityX = 4;
greenballoon.lifetime = 600/4
  greenG.add(greenballoon);
}

