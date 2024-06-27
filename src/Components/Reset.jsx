import GameState from "./GameState";
 
// SET FUNCTION RESET BY CHECK GAMESTATE
function Reset({gameState, onReset}) {
    if (gameState === GameState.InProgress){
    }
    return<button onClick ={onReset} className="reset-button">RESET</button>;
}

export default Reset