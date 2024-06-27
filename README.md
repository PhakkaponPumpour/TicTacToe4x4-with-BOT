# TicTacToe 4x4 Game with React (กลับมาแก้ไข)
 
โปรเจกต์เกม Tic-Tac-Toe ที่พัฒนาด้วย React มีการใช้งาน useState และ useEffect hooks เพื่อจัดการสถานะของเกม และรองรับการเล่นในขนาด 4x4.
**ทดลองเล่นได้ที่** 
[TicTacToe4x4 By Phakkapon ](https://tictactoe4x4byphakkapon.netlify.app/)
# ตัวอย่าง Game
![download](https://github.com/PhakkaponPumpour/TicTacToe-4x4/assets/134637954/ec1dbb5a-b4de-4c0c-9328-7c7594d7f696)

## การติดตั้ง (Installation)

1.  **Clone โปรเจค**
	```bash
	git clone https://github.com/PhakkaponPumpour/TicTacToe-4x4.git
	```
2.  **จากนั้น cd ไปที่โปรเจคที่เราได้ Clone มา**
	```bash 
	cd TicTacToe-4x4
	```
3.	**ติดตั้ง dependencies:**
	```bash 
	npm install 
	```
4.  **เริ่มต้นการใช้งาน**
	```bash 
	npm start
	```
5.	 **เปิดเบราว์เซอร์และไปที่:**
		``` http://localhost:3000 ```


## โครงสร้างโปรเจกต์ (Project Structure)
 - **public/**: โฟลเดอร์ที่เก็บไฟล์สาธารณะ เช่น index.html 
 - **src/**: โฟลเดอร์ที่เก็บไฟล์ซอร์สโค้ดหลัก 
 - **components/**: โฟลเดอร์ที่เก็บคอมโพเนนต์ของ React 
	- **Board.jsx**
	- **GameHistorry.jsx** 		
	- **GameOver.jsx** 	
	- **GameState.js** 		
	- **Board.jsx** 		
	- **Reset.jsx**
	- **Strike.jsx** 		
	- **TicTacToe.jsx** 		
	- **Tile.jsx**
 - **App.js**: คอมโพเนนต์หลักของแอปพลิเคชัน 
 -  **index.js**: ไฟล์เริ่มต้นของแอปพลิเคชัน 
 - **App.css**: ไฟล์สไตล์ของแอปพลิเคชัน
## การออกแบบโปรแกรม (Application Design)
สร้าง Diagram ขึ้นมา เพื่อจัดการ Component ส่วนต่างๆทีต้องการจะใช้
![สกรีนช็อต 2024-06-27 164145](https://github.com/PhakkaponPumpour/TicTacToe-4x4/assets/134637954/1c0e943d-f79c-44df-8ebd-d68aa4dd4787)

## การทำงานในส่วน Component 
- **TicTacToe.jsx**
	- **การใช้งาน Component อื่นๆ ให้ทำงานใน TicTacToe.jsx**: 
		```bash
		import { useEffect, useState } from  "react";
		import Board from  "./Board";
		import GameOver from  "./GameOver";
		import GameState from  "./GameState";
		import Reset from  "./Reset";
		import GameHistory from  "./GameHistory";
		```
	- **การกำหนดข้อมูลเบื้องต้น**: 
		- กำหนดค่าสำหรับผู้เล่น X และ O ด้วย `player_X` และ `player_O`	
		```bash
			const  player_X  =  "X";
			const  player_O  =  "O";
		```
		-   กำหนดกฎการชนะของเกม Tic-Tac-Toe 4x4 ที่รวมถึงการชนะในแนวนอน (ROW) และแนวตั้ง (COLUMN) และแนวทแยง (DIAGONAL) ด้วย `winningRule`.
		```bash
			const  winningRule  = [
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
			{ combo: [0, 5, 10, 15], strikeClass: "strike-diagonal-1"},
			{ combo: [3, 6, 9, 12], strikeClass: "strike-diagonal-2" },
			];
		```	
	- **การทำงานใน Function `(checkWinner):`**	
		-	ฟังก์ชันนี้ใช้เพื่อตรวจสอบว่ามีผู้ชนะหรือไม่โดยตรวจสอบแต่ละกฎการชนะใน `winningRule`.
		```bash
			for (const { combo, strikeClass } of  winningRule) {
			//SET VALUE FORM COMBO
			const  tileValue1  =  tiles[combo[0]];
			const  tileValue2  =  tiles[combo[1]];
			const  tileValue3  =  tiles[combo[2]];
			const  tileValue4  =  tiles[combo[3]];
		```
		-	หากมีผู้ชนะแล้วจะกำหนด `strikeClass` และ `gameState` ตามผู้ชนะที่ตรงกับเกมนั้น ๆ (Player X ชนะ หรือ Player O ชนะ).
		```bash
			if (
				tileValue1  !==  null  &&
				tileValue1  ===  tileValue2  &&
				tileValue1  ===  tileValue3  &&
				tileValue1  ===  tileValue4
			) {
				setStrikeClass(strikeClass);
				if (tileValue1  ===  player_X) {
				setGameState(GameState.PlayerXWIN);
					} else {
				setGameState(GameState.PlayerOWIN);
				}
				return;
				}
		}
		```
		-	ถ้าไม่มีช่องว่างเหลือในกระดานเกม และไม่มีผู้ชนะจะกำหนด `gameState` เป็น DRAW (เสมอ).
		```bash
			// IF EVERY TILE FILLED IT GONNA BE "DRAW"
			const  allFilledIn  =  tiles.every((tile) =>  tile  !==  null);
			if (allFilledIn) {
				setGameState(GameState.DRAW);
		}
		```
	- **การจัดการกับข้อมูลและสถานะ:**
		- ใช้ `useState` เพื่อจัดการกับ `tiles` (เก็บข้อมูลช่องในกระดาน), `playerTurn` (ผู้เล่นที่ตามกำลังเล่น), `strikeClass` (รูปแบบเส้นทับ), และ `gameState` (สถานะของเกม: InProgress, Player X WIN, Player O WIN, หรือ DRAW).
		```bash
			//Set state Array
			const [tiles, setTiles] =  useState(Array(16).fill(null));
			//Set Player state
			const [playerTurn, setPlayerTurn] =  useState(player_X);
			//Set Strike Line
			const [strikeClass, setStrikClass] =  useState();
			//Set STATE OF GAME
			const [gameState, setGameState] =  useState(GameState.InProgress);
			//SWITCH PLAYER X AND O	
		```
		- การคลิกที่ช่องในกระดาน (`handleTileClick`) จะตรวจสอบสถานะเกม และเปลี่ยนตาผู้เล่นตามที่กำหนด.
		```bash
		const  handleTileClick  = (index) => {
			// IF gameState==>InProgress can not click anymore
				if (gameState  !==  GameState.InProgress) {
					return;
				}
				//SET IF YOU CLICK TWICE, IT WILL SHOW ONLY PLAYER
				if (tiles[index] !==  null) {
					return;
					}
			// SET IF YOU CLICK TWICE, IT WILL SHOW ONLY PLAYER
			const  newTiles  = [...tiles];
			newTiles[index] =  playerTurn;
			setTiles(newTiles);
			setGameHistory((prevHistory) => [...prevHistory, { tiles: newTiles, playerTurn }]);
			if (playerTurn  ===  player_X) {
			setPlayerTurn(player_O);
			} else {
				setPlayerTurn(player_X);
			}
		};
		```
		- **ปุ่ม Reset**
		Reset เพื่อเริ่มเกมใหม่ทุกครั้งที่เกมจบลง หรือต้องการเริ่มเกมใหม่.
		```bash
		// RESET BUTTON
		const  handleReset  = ()=>{
		setGameState(GameState.InProgress);
		setTiles(Array(16).fill(null));
		setPlayerTurn(player_X);
		setStrikClass(null);
		setGameHistory([]);
		};
		```
	- **useEffect ?**
		`useEffect` จะถูกใช้เพื่อเรียกฟังก์ชัน `checkWinner` ทุกครั้งที่ค่าของ `tiles` เปลี่ยนแปลง
		- เมื่อใดก็ตามที่มีการเปลี่ยนแปลงในกระดานเกม (เช่น ผู้เล่นคนหนึ่งคลิกที่ช่องใดช่องหนึ่ง) `useEffect` จะทำการเรียก `checkWinner`
		-  `checkWinner` รับ `tiles`, `setStrikClass`, และ `setGameState` เป็นพารามิเตอร์เพื่อใช้ตรวจสอบว่ามีผู้ชนะหรือไม่
		```bash
		//uesEffect CHECK WINNER
		useEffect(() => {
		checkWinner(tiles,setStrikClass, setGameState);
		}, [tiles]);
		```
	- **การแสดงผลโดยนำ Component มาเรียกใช้**
		- แสดงกระดานเกม (`Board`) พร้อมทั้งเส้นทับ (Strike) ในตำแหน่งที่ชนะ.
		-  แสดงข้อความ Game Over หรือ Draw ใน `GameOver` component.
		- แสดงประวัติการเล่นเกม (`GameHistory`) เพื่อให้ผู้เล่นสามารถกลับไปดูท่าทางการเล่นก่อนหน้าได้.
		```bash
		return (
			<div>
				<h1>TicTacToe &nbsp;4x4</h1>
				<Board
					playerTurn={playerTurn}
					tiles={tiles}
					onTileClick={handleTileClick}
					strikeClass={strikeClass}
				/>
				<GameOver  gameState={gameState}  />	
				<Reset  gameState={gameState}  onReset={handleReset}  />
				{gameHistory.length  >  0  && (
				<GameHistory  gameHistory={gameHistory}  replayMove={replayMove}  />
			)}
			</div>
		);
		```
-  **Tile.jsx**
	 - **Props:**
		- `className`: คลาสเพิ่มเติมที่ถูกส่งเข้ามาเพื่อกำหนดสไตล์เฉพาะให้กับ Tile
		- `value`: ค่าที่อยู่ใน Tile ( "X" หรือ "O")
		- `onClick`: ฟังก์ชันที่ถูกเรียกเมื่อมีการคลิกที่ Tile
		- `playerTurn`: ผู้เล่นคนปัจจุบันที่กำลังเล่น ( "X" หรือ "O")
	- **hoverClass:**
		- ถ้า `value` ของ Tile เป็น null (หมายถึงช่องนี้ยังว่างอยู่) และ `playerTurn` ไม่เป็น null (หมายถึงมีผู้เล่นคนหนึ่งกำลังเล่น) จะกำหนดค่า `hoverClass` ให้เป็น `${playerTurn.toLowerCase()}-hover`
		- โดยคลาสนี้จะใช้สำหรับเอฟเฟกต์ hover เมื่อผู้เล่นกำลังเลื่อนเมาส์ไปเหนือ Tile นั้น
	- **การทำงาน**
		- ใน JSX ที่ return จะมี `div` ที่เป็น Tile
		- -   เมื่อมีการคลิกที่ Tile จะเรียกฟังก์ชัน `onClick`
		- `className` จะประกอบไปด้วย `tile`, `className` ที่ถูกส่งเข้ามา และ `hoverClass` 
		- ภายใน `div` จะแสดงค่า `value` ของ Tile
		```bash
		function  Tile({ className, value, onClick, playerTurn }) {
			let  hoverClass  =  null;
		// VALUE == and PLAYER != IT WILL SHOW HOVER CLASS
			if (value  ==  null  &&  playerTurn  !=  null) {
				hoverClass  =  `${playerTurn.toLowerCase()}-hover`;
				}
				return 
		// SET EVERY TILE WHEN U CLICK (VALUE,CLASSNAME,HOVER)		
				<div  onClick={onClick}  className={`tile ${className}  ${hoverClass} `}>
					{value}
				</div>
				);
		}
		```
- **Board.jsx**
	- ฟังก์ชั่น `Board` รับ props หลายค่าคือ `tiles`, `onTileClick`, `playerTurn`, และ `strikeClass`. 
	-	ใช้โครงสร้าง `<div> *16` เพื่อสร้างกริด 4x4 
	-	แต่ละ `Tile` ในกริดถูกสร้างขึ้นโดยใช้คอมโพเนนต์ `Tile`.
	-	`Tile` แต่ละตัวได้รับ props:
		-	`playerTurn`: ส่งผ่านเพื่อแสดงถึงว่าผู้เล่นคนไหนกำลังเล่นอยู่.
		-	`onClick`: ฟังก์ชั่นที่จะเรียกเมื่อมีการคลิกที่ `Tile`.
		-	`value`: ค่าใน `Tile` นั้น ๆ (คือ "X", "O" หรือ `null`).
		-	`className`: คลาส CSS เพื่อกำหนดขอบของ `Tile`.
	-	ส่วนท้ายของกริด มีการแสดงคอมโพเนนต์ `Strike` ซึ่งใช้แสดงเส้นขีดเพื่อบอกว่า ผู้ชนะในแนวใด โดยใช้ prop `strikeClass`. 
```bash
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
```
- **Strike.jsx** 
ใช้สำหรับแสดงเส้นทับที่แสดงถึงการชนะในเกม TicTacToe  โดยใช้ `strikeClass` เพื่อกำหนดรูปแบบของเส้นทับที่เหมาะสมกับตำแหน่งที่ชนะ
	- **Props ที่รับ:**
		- 	`strikeClass`: คลาส CSS ที่ใช้เพื่อกำหนดรูปแบบของเส้นทับ ซึ่งจะได้รับจาก `checkWinner` ใน `TicTacToe` โดยตรง.
	- **การทำงาน**
		-  	`<div>` ที่มีคลาส `strike` และ `strikeClass` ซึ่งเป็นตัวแปรที่รับมาจาก `props` จะถูกแสดงเพื่อแสดงเส้นทับตามตำแหน่งที่ชนะในเกม.
```bash
function Strike({ strikeClass }) {
    return (
        <div className={`strike ${strikeClass}`}>
        </div>
    );
}
export default Strike;
```

- **Reset.jsx**
Component `Reset` ใช้เพื่อแสดงปุ่มรีเซ็ตเกม ซึ่งจะรีเซ็ตสถานะของเกมเมื่อถูกคลิก
	- **Props ที่รับ**:
		-  `gameState`: สถานะของเกมที่มาจาก `GameState`.
		-  `onReset`: ฟังก์ชั่นที่เรียกเมื่อปุ่มรีเซ็ตถูกคลิก เพื่อรีเซ็ตเกม.
	- **การทำงาน**
		- หากสถานะของเกม (`gameState`) เป็น `InProgress`, Component ปุ่ม`button`  จะไม่มีการทำงานใดๆเกิดขึ้น.
		- ปุ่ม `<button>` ที่มีคลาส `reset-button` จะถูกแสดงเสมอโดยมีข้อความ "RESET".
		- เมื่อปุ่มถูกคลิก, ฟังก์ชั่น `onReset` จะถูกเรียก.
```bash 
import GameState from "./GameState";
// SET FUNCTION RESET BY CHECK GAMESTATE
function Reset({ gameState, onReset }) {
    if (gameState === GameState.InProgress) {
        // ถ้า gameState เป็น InProgress ไม่ทำอะไรเป็นพิเศษ
    }
    return <button onClick={onReset} className="reset-button">RESET</button>;
}
export default Reset;
```

- **GameState.js** 
สร้าง Object ที่เก็บค่าคงที่สำหรับสถานะต่างๆ ของเกม TicTacToe โดยใช้เพื่อบอกสถานะของเกมในขณะนั้น เช่น เกมยังดำเนินอยู่ (InProgress), ผู้เล่น X ชนะ (PlayerXWIN), ผู้เล่น O ชนะ (PlayerOWIN), หรือเกมเสมอ (DRAW)
	- **PlayerXWIN**:ตัวแปรนี้เก็บค่าคงที่ "0" เพื่อระบุว่าผู้เล่น X ชนะเกม.
	-  **PlayerOWIN**: ตัวแปรนี้เก็บค่าคงที่ "1" เพื่อระบุว่าผู้เล่น O ชนะเกม.
	- 	**DRAW**: ตัวแปรนี้เก็บค่าคงที่ "2" เพื่อระบุว่าเกมนี้เสมอ.
	- **InProgress**: ตัวแปรนี้เก็บค่าคงที่ 3 เพื่อระบุว่าเกมยังคงดำเนินอยู่.
```bash 
const GameState = {
    PlayerXWIN: "0",
    PlayerOWIN: "1",
    DRAW: "2",
    InProgress: 3,
};

export default GameState;
 ```  			

- **GameOver.jsx** 	
	- **Props ที่รับ**:
		- `gameState`: สถานะของเกมที่มาจาก `GameState`.
	- **การทำงาน**
		- ใช้ `switch` เพื่อจัดการกับค่าต่างๆ ของ `gameState`.
		- หาก `gameState` เป็น `InProgress`, Component จะไม่แสดงอะไรเลย (return `undefined`).
		- หาก `gameState` เป็น `PlayerOWIN`, จะแสดงข้อความ "PLAYER O WIN !". 
		- หาก `gameState` เป็น `PlayerXWIN`, จะแสดงข้อความ "PLAYER X WIN !".
		- หาก `gameState` เป็น `DRAW`, จะแสดงข้อความ "DRAW !".
		- หาก `gameState` ไม่ตรงกับกรณีใดๆ (`default`), Component จะะไม่แสดงอะไรเลย (return `undefined`).
```bash 
import GameState from "./GameState";
function GameOver({ gameState }) {
    // ใช้ switch เพื่อตรวจสอบสถานะของเกม
    switch(gameState) {
        case GameState.InProgress:
            return null;
        // หากสถานะของเกมเป็น PlayerOWIN
        case GameState.PlayerOWIN:
            return <div className="game-over">PLAYER O WIN !</div>;
        // หากสถานะของเกมเป็น PlayerXWIN
        case GameState.PlayerXWIN:
            return <div className="game-over">PLAYER X WIN !</div>;
        // หากสถานะของเกมเป็น DRAW
        case GameState.DRAW:
            return <div className="game-over">DRAW !</div>;
        default:
            return null;
    }
}
export default GameOver;
```
- **GameHistory.jsx** 
	- **Props ที่รับ**:
		-   `gameHistory`: อาร์เรย์ที่เก็บประวัติการเคลื่อนไหวของเกม
		-   `replayMove`: ฟังก์ชั่นที่ใช้เพื่อย้อนกลับไปยังสถานะก่อนหน้าของเกม
	- **การทำงาน**
		-	ใช้ `.map` เพื่อวนซ้ำผ่าน `gameHistory` และสร้าง `<li>` สำหรับแต่ละการเคลื่อนไหว.
		-	`<li>` แต่ละตัวมีปุ่ม `<button>` ที่มีฟังก์ชั่น `onClick` ซึ่งจะเรียก `replayMove` พร้อมกับค่าของการเคลื่อนไหว (`index`).
		-	เมื่อผู้ใช้คลิกปุ่ม "Go to Move", ฟังก์ชั่น `replayMove` จะถูกเรียกและส่งค่าของการเคลื่อนไหวไป เพื่อย้อนกลับไปยังสถานะของเกมในขณะนั้น.
```bash
	const GameHistory = ({ gameHistory, replayMove }) => {
  return (
    <div className="game-history">
      <h2>Game History</h2>
      <ul>
        {gameHistory.map((history, index) => (
          <li key={index}>
            <button onClick={() => replayMove(index)}>Go to Move {index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GameHistory
```


## Have fun : )
