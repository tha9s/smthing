const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5

var ground

var rope1,rope2,rope3,rope4,rope5

function setup(){
    createCanvas(800,800);
  engine = Engine.create();

  world = engine.world;

  ground = new Ground(600,200,1200,10)
  ball1 = new Bob(200,600,100,100);
  ball2 = new Bob(300,600,100,100)
  ball3 = new Bob(400,600,100,100);
  ball4 = new Bob(500,600,100,100)
  ball5 = new Bob(600,600,100,100)


  rope1 = new Rope(ball1.body,{x:200,y:200})
  rope2 = new Rope(ball2.body,{x:300,y:200})
  rope3 = new Rope(ball3.body,{x:400,y:200})
  rope4 = new Rope(ball4.body,{x:500,y:200})
  rope5 = new Rope(ball5.body,{x:600,y:200})


}

function draw(){
    background("yellow")
    Engine.update(engine);

    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()
    ground.display()

}

function keysPressed(){
 
  
}

function keyPressed() {
if (keyCode === 37) {
  ball1.body.speed = 3
 
}


}

