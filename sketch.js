var bg;
var astronaut;
function preload(){
bg = loadImage("images/iss.png");
sl = loadImage("images/sleep.png");
br = loadImage("images/brush.png");
gy= loadAnimation("images/gym1.png, images/gym2.png");
gm= loadAnimation("images/gym11.png, images/gym12.png");
et= loadAnimation("images/eat1.png, images/eat2.png");
dr= loadAnimation("images/drink1.png, images/drink2.png");
mv= loadAnimation("images/move.png, images/move1.png");
}

function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sl);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);


textSize(10);
fill(255);
text("INSTRUCCIONES:",20,10); 
textSize(10);
fill(255);
text("G = Ejercitarse",20,15); 
textSize(10);
fill(255);
text("H = Ejercitarse x2",20,20); 
textSize(10);
fill(255);
text("E = Comer",20,25); 
textSize(10);
fill(255);
text("E = Comer",20,25); 
textSize(10);
fill(255);
text("D = Beber",20,30); 
textSize(10);
fill(255);
text("M = Moverse",20,35); 


  if(KeyDown("B")){
  astronaut.addImage("Brushing", br);
  astronaut.changeImage("Brushing");
  astronaut.y =350;
  astronaut.VelocityX=0;
  astronaut.VelocityY=0;
}

  
  if(KeyDown("G")){
  astronaut.addAnimation("gyming", gy);
  astronaut.changeAnimation("gyming");
  astronaut.y =350;
  astronaut.VelocityX=0;
  astronaut.VelocityY=0;
  }
  
  if(KeyDown("H")){
  astronaut.addAnimation("giming", gm);
  astronaut.changeAnimation("giming");
  astronaut.y =350;
  astronaut.VelocityX=0;
  astronaut.VelocityY=0;
  }

  if(KeyDown("E")){
    astronaut.addAnimation("eating", et);
    astronaut.changeAnimation("eating");
    astronaut.y =350;
    astronaut.VelocityX=0;
    astronaut.VelocityY=0;
    }

    if(KeyDown("D")){
      astronaut.addAnimation("drinking", dr);
      astronaut.changeAnimation("drinking");
      astronaut.y =350;
      astronaut.VelocityX=0;
      astronaut.VelocityY=0;
      }

      if(KeyDown("M")){
        astronaut.addAnimation("moving", mv);
        astronaut.changeAnimation("moving");
        astronaut.y =350;
        astronaut.VelocityX=0;
        astronaut.VelocityY=0;
        }

}