const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var backgroundImg;
var background2;
var ground;
var snowImg;

function preload(){
backgroundImg = loadImage("snow1.jpg");
snowImg = loadImage("snow4.webp");
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  background2 = createSprite(400,300,1600,800); 
  background2.addImage(backgroundImg);
  background2.scale = 1.6;
   
  
  ground = new Ground(400,380,1000,15);
  
  
}

function draw() {
  background("lightblue");
  Engine.update(engine);
 
  
 ground.display(); 


drawSprites();
}