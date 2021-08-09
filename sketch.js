
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1=new bob(235,600,70);
	bobObject2=new bob(305,600,70);
	bobObject3=new bob(375,600,70);
	bobObject4=new bob(440,600,70);
	bobObject5=new bob(510,600,70);

	roofObject=new roof(400,50,750,20)

	rope1=new rope(bobObject1.body,roofObject.body, -bobDiameter*2, 0)
	rope2=new rope(bobObject2.body,roofObject.body, -bobDiameter*2, 0)
	rope3=new rope(bobObject3.body,roofObject.body, -bobDiameter*2, 0)
	rope4=new rope(bobObject4.body,roofObject.body, -bobDiameter*2, 0)
	rope5=new rope(bobObject5.body,roofObject.body, -bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:130,y:-145});


