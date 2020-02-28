const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine;
var world;
var box;
var chain, spring;




function setup() {
  createCanvas(800,400);
  box= createSprite(400, 200, 50, 50);
  engine = Engine.create();
world = engine.world;
spring= createSprite(400,150,60,60);
World.add(world,spring);

chain= new Chain(spring.body,box.body);
} 

function draw() {
  background(255,255,255);  
  box.x=World.mouseX;
  box.y=World.mouseY;
  if(keyDown(space)){
    spring.x=400;
    spring.y=150;
  }
  drawSprites();
  box.display();
  chain.display();
  spring.display();

}