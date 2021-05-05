class Boxes{
    constructor(x,y,width,height){
        var options={
            
            'friction':1.0,
            'restitution':0.8,
            'density':20,
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        strokeWeight(2);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}