var paper;
var ground;
var bin1,bin2,bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,690,800,20);
	paper=new Paper(100,680);
	bin = new Bin(650,670);
	slingshot = new Slingshot(paper.body,{x: 130,y:400})


}

function draw() {
  background("white");
  Engine.update(engine);
 
  
 ground.display();
 bin.display();
 paper.display();
 slingshot.display();
}


function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY}); 
   }
   
   function mouseReleased(){
	   slingshot.fly();
   }


