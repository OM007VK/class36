var ball;
var database,ballrefence;
var form1, game1, player1;
var gameState=0;
var playerCount=0;

function setup(){
    createCanvas(500,500);
   
    database=firebase.database();
    //ballrefence=database.ref("ball/position")
    //ballrefence.on("value",readPosition);
    game1 = new game();
    game1.startGame();
} 

function draw(){
    background("white");
    

    
    drawSprites();
}

