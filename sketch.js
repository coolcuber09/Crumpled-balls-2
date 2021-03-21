
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var bin,papers,world,ground
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin = new dustbin(1200,650);
	papers = new paper(200,450,70);
  ground = new Ground(width/2,670,width,20);
  var render = Render.create({
    element:document.body,
    engine:engine,
    options:{
    width:1200,
    height:700,
    wireframes:false
    }
  })
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bin.display();
  papers.display();
  ground.display();
 
  
  drawSprites();
 
  
 


}
function keyPressed() {
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(papers.body,papers.body.position,{x:85,y:-85});	
	}

}



