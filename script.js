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
	let activePlayer = playerTwo;

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
		const sidebar = document.querySelector(".sidebar");
			gameContainer.appendChild(sidebar);

		
		const playerOneLabel = document.createElement("label");
			sidebar.appendChild(playerOneLabel);
				playerOneLabel.htmlFor = "player-one-input";
				playerOneLabel.textContent = "Player One's Name:"
				playerOneLabel.classList.add("player-one");
			
		const playerOneInput = document.createElement("input");
			sidebar.appendChild(playerOneInput);
				playerOneInput.type = "text";
				playerOneInput.id = "player-one-input";
				playerOneInput.classList.add("player-one");

		
		const playerTwoLabel = document.createElement("label");
			sidebar.appendChild(playerTwoLabel);
				playerTwoLabel.htmlFor = "player-two-input";
				playerTwoLabel.textContent = "Player Two's Name:"
				playerTwoLabel.classList.add("player-two");
		
		const playerTwoInput = document.createElement("input");
			sidebar.appendChild(playerTwoInput);
				playerTwoInput.type = "text";
				playerTwoInput.id = "player-two-input";
				playerTwoInput.classList.add("player-two");

		const boardDisplay = document.querySelector(".board");
			gameContainer.appendChild(boardDisplay);

			
			const turnDisplay = document.querySelector(".turn");
			sidebar.appendChild(turnDisplay);
			turnDisplay.textContent = `${Players.activePlayer}'s turn!`;
			
			const playButton = document.createElement("submit");
					sidebar.appendChild(playButton);
					playButton.textContent = "Play Tic-Tac-Toe!";
					playButton.addEventListener('click', () => {
						document.body.appendChild(gameContainer);
						
					})
				
				
				
				for (let i=0;i<9;i++) {
				const square = document.createElement("button");
					boardDisplay.appendChild(square);
					square.id = `square${i + 1}`
					square.textContent = "";
					square.addEventListener('click', () => {
						let index = (i - 1) + 1;
						if (Players.activePlayer === Players.playerOne) {	
								GameController.makeMove(Players.playerOne, index);
								square.textContent = "X";

						} else if (Players.activePlayer === Players.playerTwo) {
								GameController.makeMove(Players.playerTwo, index);
								square.textContent = "O";
						};

						console.log(Gameboard.board);
		})};

})();