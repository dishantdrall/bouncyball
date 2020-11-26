
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true 
  }
  var ballOption={
    restitution: 0.7
  }
  ball = Bodies.circle(200,200,20,ballOption);
  World.add(world,ball);

  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world, ground);

  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}