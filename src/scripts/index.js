import "../styles/index.scss";
import TicTacToe from "./tictactoe";

document.addEventListener("click", (e)=>{
    
    const player1Container = document.querySelectorAll(".player")[0];
    const player2Container = document.querySelectorAll(".player")[1];
    const player1Name      = player1Container.querySelector(".player-name" ).value;
    const player2Name      = player2Container.querySelector(".player-name" ).value;
    const player1Shape     = player1Container.querySelector(".player-shape").value;
    const player2Shape     = player2Container.querySelector(".player-shape").value;
    const player1Color     = player1Container.querySelector(".player-color").value;
    const player2Color     = player2Container.querySelector(".player-color").value;
    const player1Type      = player1Container.querySelector(".player-type" ).value;
    const player2Type      = player2Container.querySelector(".player-type" ).value;
    player1Container.setAttribute("data-player", player1Name);
    player2Container.setAttribute("data-player", player2Name);
    let botDelay = parseInt(document.querySelector("[data-bot-delay]").value);//ms
    
    if(e.target.getAttribute("data-block")){
        let turnObj = TicTacToe.whosTurn();
        if(turnObj == null){return;}
        if(turnObj.type == "human"){
            TicTacToe.play(turnObj.name, parseInt(e.target.getAttribute("data-block")));
            TicTacToe.playBot(botDelay);
        }
        else{TicTacToe.playBot(botDelay);}
        
    }else if(e.target.hasAttribute("data-start-restart")){
        TicTacToe.resetGame(true);//true: remove players
        TicTacToe.createPlayer(player1Name, player1Shape, player1Color, player1Type);
        TicTacToe.createPlayer(player2Name, player2Shape, player2Color, player2Type);
        TicTacToe.startGame();
        TicTacToe.playBot(botDelay);//if it's bot's turn it plays bot
    }else if(e.target.hasAttribute("data-another")){
        TicTacToe.resetGame();
        TicTacToe.startGame();
        TicTacToe.playBot(botDelay);//if it's bot's turn it plays bot
    }
})
//todo: controle bot mode
//todo: give a hint