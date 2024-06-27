import GameState from "./GameState";


function GameOver({gameState}) {
    // use switch if gameState--->InProgress from GameState(it will show nothing)
    switch(gameState){
        case GameState.InProgress:
            return;
            // if gameState--->PlayerOWIN
            case GameState.PlayerOWIN:
            return <div className="game-over">PLAYER O WIN !</div>;
            // if gameState--->PlayerXWIN
            case GameState.PlayerXWIN:
            // if gameState--->DRAW
            return <div className="game-over">PLAYER X WIN !</div>;
            case GameState.DRAW:
                return <div className="game-over">DRAW !</div>;
        default:
            return;

    }
}

export default GameOver;