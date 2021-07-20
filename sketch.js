const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    
	var bob_options={
		isStatic:false,
		restitution:0.5,
		friction:1,
	

	}
	bob1=Bodies.circle(320,300,-35,bob_options);
    World.add(world,bob1);

	bob2=Bodies.circle(355,300,-35,bob_options);
	World.add(world,bob2);

	bob3=Bodies.circle(390,300,-35,bob_options);
	World.add(world,bob3);

	bob4=Bodies.circle(425,300,-35,bob_options);
	World.add(world,bob4);

	bob5=Bodies.circle(460,300,-35,bob_options);
	World.add(world,bob5);

	rope1=new rope(bob1,{x:320,y:100});
	rope2=new rope(bob2,{x:355,y:100});
	rope3=new rope(bob3,{x:390,y:100});
	rope4=new rope(bob4,{x:425,y:100});
	rope5=new rope(bob5,{x:460,y:100});

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,40);

  //call display() to show ropes here
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,-35);
  ellipse(bob2.position.x,bob2.position.y,-35);
  ellipse(bob3.position.x,bob3.position.y,-35);
  ellipse(bob4.position.x,bob4.position.y,-35);
  ellipse(bob5.position.x,bob5.position.y,-35);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){
	if(keyCode==UP_ARROW){

		Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.5,y:0})
	}
}