class player{
    constructor()
 {}

    getPlayerCount(){
    playerrefence=database.ref("playerCount");
    playerrefence.on("value",function(data){playerCount=data.val()})
    }
    
    update(playerName){
    var playerindex="player" + playerCount
    database.ref(playerindex).set({name:playerName})

    }
    
    updateCount(count)
    {

        database.ref("/").update({playerCount : count})
    }
}