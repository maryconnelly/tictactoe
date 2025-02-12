//object to store the board
const Gameboard = (function() {
	const board = [ "", "", "", "", "", "", "", "", "" ];
	const getBoard = () => board;
	const displayBoard = () => console.log(board);

		return { board, getBoard, displayBoard };
})();

//Players stored in objects
const Players = (function () { 
	const playerOne = "Mary";
	const playerTwo = "Asher";
	let activePlayer = playerOne;

		return { playerOne, playerTwo, activePlayer };
})();

//Object to control the flow of the game
const GameController = (function () {


	function newRoundDisplay () {
		Gameboard.displayBoard();
		console.log(`${Players.activePlayer}'s turn.`); 
	}

	function makeMove (activePlayer, index) {
		if (activePlayer === Players.playerOne && Gameboard.board[index] === "") {
			Gameboard.board[index] = "X";
		} else if 
		(activePlayer === Players.playerTwo && Gameboard.board[index] === "") {
			Gameboard.board[index] = "O";
		} else {
			console.log("Invalid move");
		}
	}
	
	function checkWinner () {
		if (Gameboard.board[0] === Gameboard.board[1] && Gameboard.board[1] === Gameboard.board[2] ||
			Gameboard.board[3] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[5] ||
			Gameboard.board[6] === Gameboard.board[7] && Gameboard.board[7] === Gameboard.board[8] ||
			Gameboard.board[0] === Gameboard.board[3] && Gameboard.board[3] === Gameboard.board[6] ||
			Gameboard.board[1] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[7] ||
			Gameboard.board[2] === Gameboard.board[5] && Gameboard.board[5] === Gameboard.board[8] ||
			Gameboard.board[0] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[8] ||
			Gameboard.board[6] === Gameboard.board[4] && Gameboard.board[4] === Gameboard.board[2]) {
				console.log(`${Players.activePlayer} wins!`);
			}
		}
		function switchTurns () {
			if (activePlayer = Players.playerOne) {
				activePlayer = Players.playerTwo;
			} else {
				activePlayer = Players.playerOne;
			}
			newRoundDisplay();
		}
		
		return { switchTurns, makeMove, checkWinner }
	})();
	
	const DisplayController = (function () {

		const gameContainer = document.querySelector(".container");
			document.body.appendChild(gameContainer);

		const turnDisplay = document.querySelector(".turn");
			gameContainer.appendChild(turnDisplay);
				turnDisplay.textContent = "Ready to play?";
	
			
		const boardDisplay = document.querySelector(".board");
			gameContainer.appendChild(boardDisplay);
		
		for (i=0;i<9;i++) {
			const square = document.createElement("button");
				boardDisplay.appendChild(square);
				
			

		}
	})();
	