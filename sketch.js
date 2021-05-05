const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var canvas;
var box1;
function setup(){
  var canvas = createCanvas(1200,800);
    engine=Engine.create();
    world = engine.world;

   
   
    box1=new Box(600,800,1200,20)
    box2=new Boxes(960,750,60,100)
    box3=new Boxes(960,700,60,100)
    box4=new Boxes(960,650,60,100)
   box5=new Boxes(960,600,60,100)
    box6=new Boxes(960,550,60,100)
    box7=new Boxes(960,500,60,100)
    box8=new Boxes(850,750,60,100)
    
    box9=new Boxes(850,700,60,100)
    box10=new Boxes(850,650,60,100)
    box11=new Boxes(850,600,60,100)
    box12=new Boxes(850,550,60,100)
    box13=new Boxes(850,500,60,100)
    box14=new Boxes(740,750,60,100)
    box15=new Boxes(740,700,60,100)
    box16=new Boxes(740,650,60,100)
    box17=new Boxes(740,600,60,100)
    box18=new Boxes(740,550,60,100)
    box19=new Boxes(740,500,60,100)
    box20=new Boxes(630,750,60,100)
    box21=new Boxes(630,700,60,100)
    box22=new Boxes(630,650,60,100)
    box23=new Boxes(630,600,60,100)
    box24=new Boxes(630,550,60,100)
    box25=new Boxes(630,500,60,100)
   
    ball1=new Ball(600,400,100,100)
    rope1=new Rope(ball1.body,{x:600,y:100})
}
function draw(){
    background(255);
  Engine.update(engine) ;
  
  rope1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();

box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

ball1.display();

}
function keyPressed(){
  if(keyCode=== LEFT_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-500,y:+100});
  }
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:+500,y:+100});
  }
  
}
