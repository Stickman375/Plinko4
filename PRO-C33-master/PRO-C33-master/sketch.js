const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;
var divisions = [];
var particles = [];
var plinkos = [];
var line;
var wall1,wall2;

var divisionHeight = 200;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
    wall1 = new Ground(790,400,7,10000);
    wall2 = new Ground(10,400,7,10000);
  
  
     for (var k = 0; k <=width; k = k + 80) {
       divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     }
  
  
      for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,75));
      }
  
      for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,175));
      }
  
       for (var j = 75; j <=width; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,275));
      }
  
       for (var j = 50; j <=width-10; j=j+50) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
  
      
  
      
  }

 

function draw() {
    background(0);
    Engine.update(engine);
    textSize(35)
  text("Points : "+score,20,40);
  fill(255);
  
  textSize(35)

  
   


    ground.display();
    wall1.display();
    wall2.display();
    /*
    if ( gameState =="END") {
        background("black");
        fill("red");
        textSize(100);
        text("Game Over", 200, 400);
       
      } 
      */
      for(var i = 0; k < plinkos.length; i++) {
       plinkos[i].display();
    }

    

   /* if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>780)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="END";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                   particle=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
    }
    */

   if(frameCount%7===0){
      particles.push(new Particle(random(width/2-30,width/2+30),9,10));
      score++;
   }
  
   
    for (var j = 0; j < particles.length; j++) {
     
      particles[j].display();
    }
  
 for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  
}

/*
function mousePressed() {
    if(gameState !== "END") {
        count++;
    particle = new Particle(mouseX, 50, 10, 10);
    }
}
*/
