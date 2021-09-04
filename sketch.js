var canvas;
var music;
var box;
var fixedRect1,fixedRect2,fixedRect3,fixedRect4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
       //create 4 different surfaces
    fixedRect1=createSprite(90,570,170,25);
    fixedRect2=createSprite(280,570,170,25);
    fixedRect3=createSprite(475,570,170,25);
    fixedRect4=createSprite(670,570,170,25);
    fixedRect1.shapeColor="blue";
    fixedRect2.shapeColor="orange";
    fixedRect3.shapeColor="darkRed";
    fixedRect4.shapeColor="green";
 
    //create box sprite and give velocity
    box=createSprite(random(20,750));
    box.shapeColor="white";
    box.x=random(20,750);
    box.velocityX=2;
    box.velocityY=3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);
    //create edgeSprite

    if(isTouching(box,fixedRect1)){
        box.shapeColor="blue";
    }
    if(isTouching(box,fixedRect2)){
        box.shapeColor="orange";
    }
    if(isTouching(box,fixedRect3)){
        box.shapeColor="darkRed";
    }
    if(isTouching(box,fixedRect4)){
        box.shapeColor="green";
    }
    
    drawSprites();

    
    //add condition to check if box touching surface and make it box
}
function isTouching(object1,object2){
    if(object1.x- object2.x<= object1.width/2+object2.width/2
      && object2.x- object1.x <= object1.width/2+object2.width/2
      && object1.y-object2.y<=object1.height/2+object2.height/2
      && object2.y-object1.y<=object1.height/2+object2.height/2){
        return true;
    }
    else{
     return false;
    }
  }     

