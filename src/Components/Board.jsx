import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="right-border bottom-border left-border top-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="right-border bottom-border top-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className="right-border bottom-border top-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="right-border bottom-border top-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="right-border bottom-border left-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
        className="right-border bottom-border left-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(9)}
        value={tiles[9]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(10)}
        value={tiles[10]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(11)}
        value={tiles[11]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(12)}
        value={tiles[12]}
        className="right-border bottom-border left-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(13)}
        value={tiles[13]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(14)}
        value={tiles[14]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(15)}
        value={tiles[15]}
        className="right-border bottom-border"
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}
export default Board;
