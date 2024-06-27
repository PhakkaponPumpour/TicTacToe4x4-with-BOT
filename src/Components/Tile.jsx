function Tile({ className, value, onClick, playerTurn }) {
  let hoverClass = null;
//   VALUE == and PLAYER != IT WILL SHOW HOVER CLASS
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
// SET EVERY TILE WHEN U CLICK (VALUE,CLASSNAME,HOVER)
    <div onClick={onClick} className={`tile ${className} ${hoverClass} `}>
      {value}
    </div>
  );
}

export default Tile;
