var ball 


function setup() {
  createCanvas(400,400);
  background("black")
   ball = createSprite(200,200,10,10)
}

function draw() 
{




if (keyIsDown("RIGHT_ARROW")) 
{
background("red")
}

if (keyIsDown("space")) {

background("blue")
  }


drawSprites()


}




