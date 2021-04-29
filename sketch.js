var canvas;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var plane,stone,rubber,iron,hammer;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7;

function preload(){
	
}

function setup() {
	canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plane=new Plane(400,700,1000,30);

	stone= new Stone(120,400,PI/4);
	
	rubber= new Rubber(650,400,50);

	sand1= new Sand(50,690,15);
	sand2= new Sand(210,690,15);
	sand3= new Sand(270,690,15);
	sand4= new Sand(330,690,15);
	sand5= new Sand(480,690,15);
	sand6= new Sand(520,690,15);
	sand7= new Sand(750,690,15);

	iron= new Iron(400,400,40);

	hammer= new Hammer(400,400);

	Engine.run(engine);
  
}


function draw() {
  background("pink");

  plane.display();

  stone.display();

  rubber.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();

  iron.display();

  hammer.display(); 
}class Stone {
    constructor(x, y,angle) {
      var options = {
          'friction':1,
          'restitution':0.3,
          'density':3
      }
      this.body = Bodies.rectangle(x, y,70,70,options);
      this.width = 70;
      this.height = 70;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);

      rotate(angle);

      rectMode(CENTER);
      fill(136,140,141);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }