
const GameHistory = ({ gameHistory, replayMove }) => {
  return (
    <div className="game-history">
      <h2>Game History</h2>
      <ul>
        {gameHistory.map((history, index) => (
          <li key={index}>
            <button onClick={() => replayMove(index)}>Go toMove {index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;