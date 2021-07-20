class rope{
	constructor(bodyA,pointB)
	{
    var options ={
		bodyA:bodyA,
		pointB:pointB,
		stiffness:0.04,
		lenghth:600,

	}

	this.pointB=pointB;
	this.rope=Constraint.create(options);
	World.add(world,this.rope);

	//create rope constraint here
     
	}


    //create display() here 
   display(){
	   var pointA=this.rope.bodyA.position;
	   var pointB=this.pointB;

	   strokeWeight(2);

	   line(pointA.x,pointA.y,pointB.x,pointB.y);

   }
}
