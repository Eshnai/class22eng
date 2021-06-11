const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var bouncy={
restitution:1.0
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
ball=Bodies.circle(200,100,30,bouncy);
World.add(world,ball);
    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("red")
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    fill("blue");
    ellipse(ball.position.x,ball.position.y,30);
}