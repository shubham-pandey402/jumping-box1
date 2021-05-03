var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){

music = loadSound("music.mp3");

    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,180,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "green"

    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 3;
    ball. velocityY = 3;
    //write code to add velocityX and velocityY

}
 
function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
   
    if(ball.x < 0){
    ball.x =ball.x + 3;
 
    }  
    if(ball.x > 800){
    ball.x= ball.x-3;

    }

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
    }

        if(block3.isTouching(ball) && ball.bounceOff(block3)){
          ball.shapeColor= "green";
          music.play();

        }
        if(block4.isTouching(ball) && ball.bounceOff(block4)){
            ball.shapeColor = "red";
            music.play();
        }
        
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    
    if(ball.y<0){
  ball.velocityY = 3;

    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
