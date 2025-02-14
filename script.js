//object to store the board
const Gameboard = (function() {
	const boardArray = [ "", "", "", "", "", "", "", "", "" ];
	const getBoard = () => boardArray;
	const displayBoard = () => console.log(boardArray);

return { boardArray, getBoard, displayBoard };
})();

//Players stored in objects
const Players = (function () { 
	let playerOne;
	let playerTwo;
	let activePlayer;

return { playerOne, playerTwo, activePlayer };
})();

//Object to control the flow of the game
const GameController = (function () {

	function newRoundDisplay () {
		Gameboard.displayBoard();
		console.log(`${Players.activePlayer}'s turn.`); 
	}

	function makeMove (activePlayer, index) {
		if (activePlayer === Players.playerOne && Gameboard.boardArray[index] === "") {
			Gameboard.boardArray[index] = "X";
		} else if 
		(activePlayer === Players.playerTwo && Gameboard.boardArray[index] === "") {
			Gameboard.boardArray[index] = "O";
		} else {
			console.log("Invalid move");
		}

	}
	
	function checkWinner () {
		if (Gameboard.boardArray[0] === Gameboard.boardArray[1] && Gameboard.boardArray[1] === Gameboard.boardArray[2] ||
			Gameboard.boardArray[3] === Gameboard.boardArray[4] && Gameboard.boardArray[4] === Gameboard.boardArray[5] ||
			Gameboard.boardArray[6] === Gameboard.boardArray[7] && Gameboard.boardArray[7] === Gameboard.boardArray[8] ||
			Gameboard.boardArray[0] === Gameboard.boardArray[3] && Gameboard.boardArray[3] === Gameboard.boardArray[6] ||
			Gameboard.boardArray[1] === Gameboard.boardArray[4] && Gameboard.boardArray[4] === Gameboard.boardArray[7] ||
			Gameboard.boardArray[2] === Gameboard.boardArray[5] && Gameboard.boardArray[5] === Gameboard.boardArray[8] ||
			Gameboard.boardArray[0] === Gameboard.boardArray[4] && Gameboard.boardArray[4] === Gameboard.boardArray[8] ||
			Gameboard.boardArray[6] === Gameboard.boardArray[4] && Gameboard.boardArray[4] === Gameboard.boardArray[2]) {
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

		const gameboardContainer = document.querySelector(".container");
		const sidebar = document.querySelector(".sidebar");
			gameboardContainer.appendChild(sidebar);

	const SidebarDisplay = (function () {
			
		const turnDisplay = document.querySelector(".turn");
			sidebar.appendChild(turnDisplay);
			turnDisplay.textContent = `${Players.activePlayer}'s turn!`;

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
				GameController.playerOne = `${playerOneInput.value}`;

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

		const playButton = document.createElement("submit");
			sidebar.appendChild(playButton);
			playButton.textContent = "Play Tic-Tac-Toe!";
			playButton.addEventListener('click', () => {
				document.body.appendChild(gameContainer);
					//FINISH THIS DUH 
		})
			
	return { turnDisplay, playerOneInput, playerOneLabel, playerTwoInput, playerTwoLabel, playButton }	
	})


	const GameboardDisplay = (function () {
		
		const gameboardDisplay = document.querySelector(".board");
		gameboardContainer.appendChild(gameboardDisplay);
		
		for (let i=0;i<9;i++) {
		const square = document.createElement("button");
			gameboardDisplay.appendChild(square);
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
				
				console.log(Gameboard.boardArray);
			})};
			
	return { gameboardContainer, gameboardDisplay,  }
	})();

return { SidebarDisplay, GameboardDisplay }
})();