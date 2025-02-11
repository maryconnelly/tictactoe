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

		return { playerOne, playerTwo };
})();

//Object to control the flow of the game
const GameController = (function () {

	let activePlayer = Players.playerOne;

	function newRoundDisplay () {
		Gameboard.displayBoard();
		console.log(`${activePlayer}'s turn.`); 
		
	}

	function makeMove (activePlayer, index) {
		newRoundDisplay();
		if (activePlayer === Players.playerOne && Gameboard.board[index] === "") {
			Gameboard.board[index] = "X";
		} else if 
		(activePlayer === Players.playerTwo && Gameboard.board[index] === "") {
			Gameboard.board[index] = "O";
		} else {
			console.log("Invalid move");
		}
		Gameboard.displayBoard();
	}
	
	function checkAvailableSquares() {
		let availableSquares = board.filter((board) => board === "");
		if (availableSquares.length > 0) {
			checkWinner();
		} else {
			Gameboard.displayBoard();
			console.log("It's a draw!");
		}
	}
	
	function checkWinner () {
		if (board[0] === board[1] === board[2] ||
			board[3] === board[4] === board[5] ||
			board[6] === board[7] === board[8] ||
			board[0] === board[3] === board[6] ||
			board[1] === board[4] === board[7] ||
			board[2] === board[5] === board[8] ||
			board[0] === board[4] === board[8] ||
			board[6] === board[4] === board[2]) {
				Gameboard.displayBoard();
				console.log(`${activePlayer} wins!`);
			} else  {
				return;
			}
		}
		
		function switchTurns () {
			if (activePlayer = Players.playerOne) {
					activePlayer = Players.playerTwo;
			} else {
					activePlayer = Players.playerOne;
			}
		}


	return { switchTurns, makeMove, checkWinner, checkAvailableSquares }
	})();

	GameController.makeMove(Players.playerOne, 0);
