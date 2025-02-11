const GameController = (function () {

		const board = [ "", "", "", "", "", "", "", "", "" ];

	//Players stored in objects
	function Players (playerName, marker) { 
		return { playerName, marker };
	}

	const playerOne = Players("Mary", "X");
	const playerTwo = Players("Asher", "O"); 

	//Object to control the flow of the game
    
	const getBoard = () => board;
    const displayBoard = () => console.log(board);

	let activePlayer = playerOne.playerName;

	function makeMove (activePlayer, index) {
		getBoard();
		if (activePlayer === playerOne && board[index] === "") {
			board[index] = "X";
		} else if 
		(activePlayer === playerTwo && board[index] === "") {
			board[index] = "O";
		} else {
			console.log("Invalid move");
		}
		checkWinner();
		checkAvailableSquares();
	}

	function switchTurns () {
		if (activePlayer = playerOne.playerName) {
				activePlayer = playerTwo.playerName;
		} else {
				activePlayer = playerOne.playerName;
		}
		function newRoundDisplay () {
			displayBoard();
			console.log(`${activePlayer}'s turn.`); 
		}
		newRoundDisplay();
		return { activePlayer };
	}

	function checkAvailableSquares() {
		getBoard();
		let availableSquares = board.filter((board) => board === "");
		if (availableSquares.length > 0) {
			checkWinner();
		} else {
			console.log("It's a draw!");
		}
	}
	
	function checkWinner () {
		getBoard();
		if (board[0] === board[1] === board[2] ||
			board[3] === board[4] === board[5] ||
			board[6] === board[7] === board[8] ||
			board[0] === board[3] === board[6] ||
			board[1] === board[4] === board[7] ||
			board[2] === board[5] === board[8] ||
			board[0] === board[4] === board[8] ||
			board[6] === board[4] === board[2]) {
				console.log(`${activePlayer} wins!`);
			} else  {
				return;
			}
		}
			return { displayBoard, switchTurns, makeMove, checkWinner, checkAvailableSquares }
		}
	)();
