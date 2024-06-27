import { useEffect, useState, useCallback } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import GameHistory from "./GameHistory";


// SET TEXT PLAYER X AND O
const player_X = "X";
const player_O = "O";

//SET WIN RULE IN TICTACTOE4X4
const winningRule = [
  //ROW WINNING RULE
  { combo: [0, 1, 2, 3], strikeClass: "strike-row-1" },
  { combo: [4, 5, 6, 7], strikeClass: "strike-row-2" },
  { combo: [8, 9, 10, 11], strikeClass: "strike-row-3" },
  { combo: [12, 13, 14, 15], strikeClass: "strike-row-4" },
  //COLUMN WINNIG RULE
  { combo: [0, 4, 8, 12], strikeClass: "strike-column-1" },
  { combo: [1, 5, 9, 13], strikeClass: "strike-column-2" },
  { combo: [2, 6, 10, 14], strikeClass: "strike-column-3" },
  { combo: [3, 7, 11, 15], strikeClass: "strike-column-4" },
  //DIAGONAL WINNING RULE
  { combo: [0, 5, 10, 15], strikeClass: "strike-diagonal-1" },
  { combo: [3, 6, 9, 12], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
  // FOR LOOP FROM WINNING RULE
  for (const { combo, strikeClass } of winningRule) {
    //SET VALUE FORM COMBO
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];
    const tileValue4 = tiles[combo[3]];
    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3 &&
      tileValue1 === tileValue4
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === player_X) {
        setGameState(GameState.PlayerXWIN);
      } else {
        setGameState(GameState.PlayerOWIN);
      }
      return true;
    }
  }

  // IF EVERY TILE FILLED IT GONNA BE "DRAW"
  const allFilledIn = tiles.every((tile) => tile !== null);
  if (allFilledIn) {
    setGameState(GameState.DRAW);
    return true;
  }
    return false;
}

function TicTacToe() {
  
  const [gameHistory, setGameHistory] = useState([]);
  const replayMove = (index) => {
    const history = gameHistory[index];
    setTiles(history.tiles);
    setPlayerTurn(history.playerTurn === player_X ? player_O : player_X);
    setGameState(GameState.InProgress);
    setGameHistory(gameHistory.slice(0, index + 1));
    setStrikClass(null)
    if (history.strikeClass) {
      setStrikClass(history.strikeClass);
    }
  };

  //Set state Array
  const [tiles, setTiles] = useState(Array(16).fill(null));
  //Set Player state
  const [playerTurn, setPlayerTurn] = useState(player_X);
  //Set Strike Line
  const [strikeClass, setStrikClass] = useState();
  //Set STATE OF GAME
  const [gameState, setGameState] = useState(GameState.InProgress);

  //SWITCH PLAYER X AND O
  const handleTileClick = useCallback((index) => {
    if (gameState !== GameState.InProgress || tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    setGameHistory((prevHistory) => [...prevHistory, { tiles: newTiles, playerTurn }]);
    setPlayerTurn(playerTurn === player_X ? player_O : player_X);
  }, [gameState, tiles, playerTurn]);
  //SWITCH PLAYER X AND O

  //BOT MOVE
  const botMove = useCallback(() => {
    const emptyTiles = tiles.map((value, index) => (value === null ? index : null)).filter(val => val !== null);
    const randomIndex = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    handleTileClick(randomIndex);
  }, [handleTileClick,tiles]);
  //BOT MOVE
  useEffect(() => {
    if (playerTurn === player_O && gameState === GameState.InProgress) {
      setTimeout(() => {
        botMove(); 
      }, 10); // delay for bot move
    }
  }, [playerTurn, gameState, tiles, botMove]); //Line 121:6:  React Hook useEffect has a missing dependency: 'botMove'. FIXXXXXX

//CHECK WINNER
useEffect(() => {
  checkWinner(tiles, setStrikClass, setGameState);
}, [tiles]);
//CHECK WINNER
 
// RESET BUTTON
  const handleReset = ()=>{
    setGameState(GameState.InProgress);
    setTiles(Array(16).fill(null));
    setPlayerTurn(player_X);
    setStrikClass(null);
    setGameHistory([]);
  };
  // RESET BUTTON


  return (
    <div>
      <h1>TicTacToe &nbsp;4x4</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
      {gameHistory.length > 0 && (
      <GameHistory gameHistory={gameHistory} replayMove={replayMove} />
    )}
    </div>
  );
}

export default TicTacToe;
