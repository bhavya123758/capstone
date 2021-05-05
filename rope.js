class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            'stiffness':0.7,
        'length': 400,
            }
            this.sling=Constraint.create(options)
           this.pointB=pointB;
            World.add(world,this.sling)
    }
    display(){
     var pointA=this.sling.bodyA.position;
     var pointB=this.pointB;
     push();
     stroke("black");
     strokeWeight(5);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
     pop();
    }
}