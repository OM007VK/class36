class game{
    constructor()
    {}
getGameCount(){
        gamerefence=database.ref("GameCount");
        gamerefence.on("value",function(data){gameState=data.val})
        }

startGame(){
   if (gameState===0) 
   {
    player1 = new player();
    player.getPlayerCount();
    form1 = new form();
    form1.display();
    
   }

}

}

  