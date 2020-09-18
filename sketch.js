//namespacing
//physics engine 
// entire universe 
const Engine = Matter.Engine

//world created inside the engine 
const World = Matter.World


//objects inside the world will follow rules of physics 
const Bodies = Matter.Bodies

var object; 


var engine, world;

var ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world =  engine.world;

    var options = {
        isStatic: true
    }

    //it creates object but ONLY in the memory of the computer, you cannot see it. 
    object = Bodies.rectangle(200,390,400,20,options);
    World.add(world,object);
    console.log(object);
    console.log(object.position.x);
    console.log(object.position.y);

    var ball_options = {
        restitution:1.0
        
    }
    ball= Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER);
   
    rect(object.position.x,object.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);
}