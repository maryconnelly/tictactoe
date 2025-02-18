
// object to store the board
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
				DisplayController.endGameDisplay();
			} else if (Gameboard.boardArray[0] !== "" && Gameboard.boardArray[1] !== "" && Gameboard.boardArray[2] !== "" && Gameboard.boardArray[3] !== "" && Gameboard.boardArray[4] !== "" && Gameboard.boardArray[5] !== "" && Gameboard.boardArray[6] !== "" && Gameboard.boardArray[7] !== "" && Gameboard.boardArray[8] !== "") {
				Players.winner = "";
				DisplayController.endGameDisplay();
			} else {
			return;
			}
		};

		return { makeMove, checkWinner }
	})();


const DisplayController = (function () {

	const container = document.querySelector(".container");
		document.body.appendChild(container);
	
	const GameboardDisplay = (function () {

		const boardDisplay = document.querySelector(".board");
		container.appendChild(boardDisplay);
			
		for (let i=0;i<9;i++) {
		const square = document.createElement("button");
			boardDisplay.appendChild(square);
			square.id = `square${(i+ 1)}`;
			square.classList.add("square");
			square.textContent = "";
			square.addEventListener('click', () => {

					if (square.textContent === "" && Players.activePlayer === Players.playerOne) {	
						GameController.makeMove(Players.playerOne, (i - 1) + 1);
						square.textContent = "X"
						square.style.color = "var(--player-one)";
						GameController.checkWinner();
						Players.activePlayer = Players.playerTwo;
						SidebarDisplay.playerTwoLabel.style.transform = "scale(1.2)";
						SidebarDisplay.playerOneLabel.style.transform = "scale(1)";
						SidebarDisplay.playerTwoLabel.textContent = `${SidebarDisplay.playerTwoInput.value}'s turn`;
						SidebarDisplay.playerOneLabel.textContent = `${SidebarDisplay.playerOneInput.value}`;
						
					} else if (square.textContent === "" && Players.activePlayer === Players.playerTwo) {
						GameController.makeMove(Players.playerTwo, (i - 1) + 1);
						square.textContent = "O";
						square.style.color = "var(--player-two)";
						GameController.checkWinner();
						Players.activePlayer = Players.playerOne;
						SidebarDisplay.playerOneLabel.style.transform = "scale(1.2)";
						SidebarDisplay.playerTwoLabel.style.transform = "scale(1)";
						SidebarDisplay.playerOneLabel.textContent = `${SidebarDisplay.playerOneInput.value}'s turn`;
						SidebarDisplay.playerTwoLabel.textContent = `${SidebarDisplay.playerTwoInput.value}`;
					}
			})
		} 

	return { boardDisplay }
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
					playerOneLabel.classList.add("player-one");
					playerOneLabel.id = "player-one-label";
					playerOneLabel.textContent = "Player One's Name:";
					playerOneLabel.style.color = "var(--player-one)";
				
			const playerOneInput = document.createElement("input");
				form.appendChild(playerOneInput);
					playerOneInput.type = "text";
					playerOneInput.id = "player-one-input";
					playerOneInput.classList.add("player-one");
					playerOneInput.required = true;
					
			const playerTwoLabel = document.createElement("label");
				form.appendChild(playerTwoLabel);
					playerTwoLabel.htmlFor = "player-two-input";
					playerTwoLabel.classList.add("player-two");
					playerTwoLabel.id = "player-two-label";
					playerTwoLabel.textContent = "Player Two's Name:";
					playerTwoLabel.style.color = "var(--player-two)";
					
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

					SidebarDisplay.sidebar.style.gridTemplate = "repeat(6, 1fr) / 1fr";
					
					const xLabel = document.createElement("h1");
					SidebarDisplay.sidebar.appendChild(xLabel);
					xLabel.style.gridArea = "2 / 1 / 3 / 2"
					xLabel.textContent = "X:"
					xLabel.style.justifySelf = "center";
					xLabel.style.fontSize = "45px";
					xLabel.style.color = "var(--player-one)";

					
					playerOneLabel.style.gridArea = "3 / 1 / 4 / 2";
					playerOneLabel.style.justifySelf = "center";
					playerOneLabel.style.fontSize = "30px";
					playerOneLabel.textContent = `${playerOneInput.value}'s turn`;
					playerOneLabel.style.transform = "scale(1.5)";
					
					playerOneInput.style.display = "none";

					const oLabel = document.createElement("h1");
					SidebarDisplay.sidebar.appendChild(oLabel);
					oLabel.style.gridArea = "4 / 1 / 5 / 2"
					oLabel.textContent = "O:";
					oLabel.style.justifySelf = "center";
					oLabel.style.fontSize = "45px";
					oLabel.style.color = "var(--player-two)";
					
					playerTwoLabel.style.gridArea = "5 / 1 / 6 / 2";
					playerTwoLabel.style.justifySelf = "center";
					playerTwoLabel.style.fontSize = "30px";
					playerTwoLabel.textContent = `${playerTwoInput.value}`;
						playerTwoInput.style.display = "none";
					playButton.style.display = "none";
					sidebar.style.gridArea = "1 / 1 / 3 / 2";
					GameboardDisplay.boardDisplay.style.display = "grid";
				});
					
	return { sidebar, playerOneInput, playerOneLabel, playerTwoInput, playerTwoLabel, playButton }	
	})();		
			
	function endGameDisplay() {
	
			const resultDisplay = document.querySelector(".result-display");
			container.appendChild(resultDisplay);
			if (Players.winner === Players.activePlayer) {
				resultDisplay.style.display = "grid";
				resultDisplay.textContent = `${Players.activePlayer} wins!`;
				
	
			} else if (Players.winner === "") {
				resultDisplay.style.display = "grid";
				resultDisplay.textContent = `It's a draw!`;
			}
	
			const playAgainButton = document.createElement('button');
				container.appendChild(playAgainButton);
				playAgainButton.id = "play-again-button";
				playAgainButton.textContent = "Play again?";
				playAgainButton.addEventListener('click', () =>{
					window.location.reload();
			})
		}
			
return { container, GameboardDisplay, SidebarDisplay, endGameDisplay }
})();
