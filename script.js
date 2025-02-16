//object to store the board
const Gameboard = (function() {
	const boardArray = [ "", "", "", "", "", "", "", "", "" ];
return { boardArray };
})();

//Players stored in objects
const Players = (function () { 
	let playerOne = "X";
	let playerTwo = "O";
	let activePlayer = playerOne;
	let winner = "";

return { playerOne, playerTwo, activePlayer, winner };
})();

//Object to control the flow of the game
const GameController = (function () {

	//make move updates array indexes to X or O;
	function makeMove(activePlayer, index) {
		if (activePlayer === Players.playerOne && Gameboard.boardArray[index] === "") {
			Gameboard.boardArray[index] = "X";
		
		} else if 
		(activePlayer === Players.playerTwo && Gameboard.boardArray[index] === "") {
			Gameboard.boardArray[index] = "O";
			
		}
	};
	
	function checkWinner() {
		if (Gameboard.boardArray[0] !== "" && Gameboard.boardArray[1] !== "" && Gameboard.boardArray[2] !== "" && 
			Gameboard.boardArray[0] === Gameboard.boardArray[1] && Gameboard.boardArray[1] === Gameboard.boardArray[2] ||
			Gameboard.boardArray[3] !== "" && Gameboard.boardArray[4] !== "" && Gameboard.boardArray[5] !== "" && 
			Gameboard.boardArray[3] === Gameboard.boardArray[4] && Gameboard.boardArray[4] === Gameboard.boardArray[5] ||
			Gameboard.boardArray[6] !== "" && Gameboard.boardArray[7] !== "" && Gameboard.boardArray[8] !== "" && 
			Gameboard.boardArray[6] === Gameboard.boardArray[7] && Gameboard.boardArray[7] === Gameboard.boardArray[8] ||
			Gameboard.boardArray[0] !== "" && Gameboard.boardArray[3] !== "" && Gameboard.boardArray[6] !== "" && 
			Gameboard.boardArray[0] === Gameboard.boardArray[3] && Gameboard.boardArray[3] === Gameboard.boardArray[6] ||
			Gameboard.boardArray[1] !== "" && Gameboard.boardArray[4] !== "" && Gameboard.boardArray[7] !== "" && 
			Gameboard.boardArray[1] === Gameboard.boardArray[4] && Gameboard.boardArray[4] === Gameboard.boardArray[7] ||
			Gameboard.boardArray[2] !== "" && Gameboard.boardArray[5] !== "" && Gameboard.boardArray[8] !== "" && 
			Gameboard.boardArray[2] === Gameboard.boardArray[5] && Gameboard.boardArray[5] === Gameboard.boardArray[8] ||
			Gameboard.boardArray[0] !== "" && Gameboard.boardArray[4] !== "" && Gameboard.boardArray[8] !== "" && 
			Gameboard.boardArray[0] === Gameboard.boardArray[4] && Gameboard.boardArray[4] === Gameboard.boardArray[8] ||
			Gameboard.boardArray[6] !== "" && Gameboard.boardArray[4] !== "" && Gameboard.boardArray[2] !== "" && 
			Gameboard.boardArray[6] === Gameboard.boardArray[4] && Gameboard.boardArray[4] === Gameboard.boardArray[2]) {
				Players.winner = Players.activePlayer;
			} else {
				Players.winner = "";
				switchTurns();	
			}
		};
	
		function switchTurns() {
				if (Players.activePlayer = Players.playerOne) {
					Players.activePlayer = Players.playerTwo;
				} else {
					Players.activePlayer = Players.playerOne;
				}	
				console.log(Players.activePlayer);
			};
	
		return { makeMove, checkWinner, switchTurns }

	})();

const DisplayController = (function () {

	const container = document.querySelector(".container");
		document.body.appendChild(container);

	const turnDisplay = document.querySelector(".turn");
		container.appendChild(turnDisplay);
			turnDisplay.textContent = `${Players.activePlayer}'s turn`;
	
	const GameboardDisplay = (function () {
			
		const boardDisplay = document.querySelector(".board");
		container.appendChild(boardDisplay);
			
		for (let i=0;i<9;i++) {
			const square = document.createElement("button");
				boardDisplay.appendChild(square);
				square.id = `square${i + 1}`
				square.textContent = "";
	
			square.addEventListener('click', () => {
				if (square.textContent === "" && Players.activePlayer === Players.playerOne) {	
					GameController.makeMove(Players.playerOne, (i - 1) + 1);
					square.textContent = "X";
					
				} else if (square.textContent === "" && Players.activePlayer === Players.playerTwo) {
					GameController.makeMove(Players.playerTwo, (i - 1) + 1);
					square.textContent = "O";
					
				};
				GameController.checkWinner();
				console.log(`${Players.activePlayer} is active`);
				console.log(Gameboard.boardArray);
				console.log(`Winner is ${Players.winner}`);
			})
		} 

			return { container, boardDisplay  }
		})();
		
		const SidebarDisplay = (function () {
	
			const sidebar = document.querySelector(".sidebar");
				container.appendChild(sidebar);
	
			const form = document.querySelector(".form");
				sidebar.appendChild(form);
				form.id = "form";
	
			const playerOneLabel = document.createElement("label");
				form.appendChild(playerOneLabel);
					playerOneLabel.htmlFor = "player-one-input";
					playerOneLabel.textContent = "Player One's Name:"
					playerOneLabel.classList.add("player-one");
					playerOneLabel.id = "player-one-label";
			const playerOneInput = document.createElement("input");
				form.appendChild(playerOneInput);
					playerOneInput.type = "text";
					playerOneInput.id = "player-one-input";
					playerOneInput.classList.add("player-one");
					playerOneInput.required = true;
	
			const playerTwoLabel = document.createElement("label");
				form.appendChild(playerTwoLabel);
					playerTwoLabel.htmlFor = "player-two-input";
					playerTwoLabel.textContent = "Player Two's Name:"
					playerTwoLabel.classList.add("player-two");
					playerTwoLabel.id = "player-two-label";
			const playerTwoInput = document.createElement("input");
				form.appendChild(playerTwoInput);
					playerTwoInput.type = "text";
					playerTwoInput.id = "player-two-input";
					playerTwoInput.classList.add("player-two");
					playerTwoInput.required = true;
	
			const playButton = document.createElement("submit");
				form.appendChild(playButton);
				playButton.textContent = "Play Tic-Tac-Toe!";
				playButton.id = "play-button";
				playButton.addEventListener('click', () => {
					playerOneInput.style.display = "none";
					playerOneLabel.textContent = `X: ${playerOneInput.value}`;
					playerTwoInput.style.display = "none";
					playerTwoLabel.textContent = `O: ${playerTwoInput.value}`;
					playButton.style.display = "none";
					turnDisplay.style.display = "block";
					sidebar.style.gridArea = "1 / 1 / 3 / 2";
					GameboardDisplay.boardDisplay.style.display = "grid";
	
				// const playAgainButton = document.createElement("button");
				// 	sidebar.appendChild(playAgainButton);
				// 	playAgainButton.id = "play-again";
				// 	playAgainButton.textContent = "Play Again?";
				// 	playAgainButton.type = "button";
				// 	playAgainButton.addEventListener('click', () => {
				// 		Gameboard.boardArray = [ "", "", "", "", "", "", "", "", "" ];
				// 		DisplayController[GameboardDisplay].square.textContent = "";
				// 		Players.playerOneInput.style.display = "block";
				// 		Players.playerTwoInput.style.display = "block";
				// 		DisplayController[SidebarDisplay].playButton.style.display = "block";
				// 	})
				})
				
				return { sidebar, turnDisplay, playerOneInput, playerOneLabel, playerTwoInput, playerTwoLabel, playButton }	
				
			})();

return { GameboardDisplay, SidebarDisplay }
})();
