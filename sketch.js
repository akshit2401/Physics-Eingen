//namespacing
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
  var ballOption = {restitution : 0.8}
  ball = Bodies.circle(200,100,30,ballOption);
  World.add(world,ball);

  var options = {isStatic : true};
  ground = Bodies.rectangle(200,390,400,20, options);
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  World.add(world, ground);

  items = ["item1","item2"] //- numbered indexing
  console.log(items[0]);

  r = {name:"Akshit",class:"9",school:"KV"}  // JSON - Java Script Object Notation - name indexed
  console.log(r.class);
  
}

function draw() {
  background(0);
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,30,30);
}
