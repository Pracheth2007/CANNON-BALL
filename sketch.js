

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
 
var ball1,ball2;
var ground;
var tanker1; 

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,360,1200,20);
    ball1 = new CanonBall(200,400,30,30);
    // ball2 = new CanonBall(200,200,30,30);
    tanker1 = new Tanker(100,100,70,70); 
    
}

function draw() {
    Engine.update(engine);

     ball1.display();
    // ball2.display();
    ground.display();
    tanker1.display();
}


// function keyReleased() {
   
// }