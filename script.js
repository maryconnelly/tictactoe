
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
	
	const formDisplay = (function() {
		
		const form = document.querySelector(".form");
			container.appendChild(form);
			
			const playerOneLabel = document.createElement("label");
				form.appendChild(playerOneLabel);
					playerOneLabel.htmlFor = "player-one-input";
					playerOneLabel.classList.add("player-one");
					playerOneLabel.id = "player-one-label";
					playerOneLabel.classList.add("player-one");
					playerOneLabel.textContent = "Player One's Name:";
				
			const playerOneInput = document.createElement("input");
				form.appendChild(playerOneInput);
					playerOneInput.id = "player-one-input";
					playerOneInput.classList.add("player-one");
					playerOneInput.type = "text";
					playerOneInput.required = true;
					
			const playerTwoLabel = document.createElement("label");
				form.appendChild(playerTwoLabel);
					playerTwoLabel.id = "player-two-label";
					playerTwoLabel.classList.add("player-two");
					playerTwoLabel.htmlFor = "player-two-input";
					playerTwoLabel.textContent = "Player Two's Name:";
					
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

					playButton.style.display = "none";
					formDisplay.form.style.display = "none";
					DisplayController.container.style.gridTemplate = "1fr / 1fr 2fr";
					SidebarDisplay.sidebar.style.display = "grid";
					SidebarDisplay.sidebar.style.gridArea = "1 / 1 / 3 / 2";
					SidebarDisplay.playerOneName.textContent = `${formDisplay.playerOneInput.value}'s turn`;
					SidebarDisplay.playerOneName.style.transform = "scale(1.2)";
					SidebarDisplay.playerTwoName.textContent = `${formDisplay.playerTwoInput.value}`;
					GameboardDisplay.boardDisplay.style.display = "grid";
				});
	return { form, playerOneInput, playerOneLabel, playerTwoInput, playerTwoLabel, playButton }	
	})();
	
	const SidebarDisplay = (function () {
		
		const sidebar = document.querySelector(".sidebar");
		container.appendChild(sidebar);
		
		const playerX = document.createElement("h1");
		sidebar.appendChild(playerX);
			playerX.id = "player-x";
			playerX.textContent = "X:";
			
		const playerOneName = document.createElement("h1");
		sidebar.appendChild(playerOneName);
			playerOneName.id = "player-one-name";	
			playerOneName.textContent = `${formDisplay.playerOneInput.value}'s turn`;
		
		const playerO = document.createElement("h1");
		sidebar.appendChild(playerO);
			playerO.id = "player-o";
			playerO.textContent = "O:";
		
		const playerTwoName = document.createElement("h1");
			sidebar.appendChild(playerTwoName);
			playerTwoName.id = "player-two-name";
			playerTwoName.textContent = `${formDisplay.playerTwoInput.value}`;
		
	return {sidebar, playerX, playerOneName, playerO, playerTwoName }
	})();
			
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
					SidebarDisplay.playerTwoName.style.transform = "scale(1.2)";
					SidebarDisplay.playerOneName.style.transform = "scale(1)";
					SidebarDisplay.playerTwoName.textContent = `${formDisplay.playerTwoInput.value}'s turn`;
					SidebarDisplay.playerOneName.textContent = `${formDisplay.playerOneInput.value}`;
					
				} else if (square.textContent === "" && Players.activePlayer === Players.playerTwo) {
					GameController.makeMove(Players.playerTwo, (i - 1) + 1);
					square.textContent = "O";
					square.style.color = "var(--player-two)";
					GameController.checkWinner();
					Players.activePlayer = Players.playerOne;
					SidebarDisplay.playerOneName.style.transform = "scale(1.2)";
					SidebarDisplay.playerTwoName.style.transform = "scale(1)";
					SidebarDisplay.playerOneName.textContent = `${formDisplay.playerOneInput.value}'s turn`;
					SidebarDisplay.playerTwoName.textContent = `${formDisplay.playerTwoInput.value}`;
				}
			})
		} 
			
	return { boardDisplay }
	})();		
		
	function endGameDisplay() {
			
		const overlay = document.createElement("div");
		DisplayController.container.appendChild(overlay);
			overlay.id = "overlay"; 
			overlay.style.display= "grid";
		
		const resultDisplay = document.createElement("div");
		overlay.appendChild(resultDisplay);
			resultDisplay.id = "result-display";
			resultDisplay.style.display = "grid";
		const result = document.createElement("h1");
			resultDisplay.appendChild(result);
			result.id = "result";
			
			if (Players.winner === Players.activePlayer) {
				result.textContent = `${Players.activePlayer} wins!`;
			
			} else if (Players.winner === "") {
				result.textContent = `It's a draw!`;
		}
		
		const playAgainButton = document.createElement('button');
		resultDisplay.appendChild(playAgainButton);
			playAgainButton.id = "play-again-button";
			playAgainButton.textContent = "Play again?";
			
			playAgainButton.addEventListener('click', () =>{
				window.location.reload();
			})

	return { overlay, resultDisplay, playAgainButton };
	}
		
return { container, GameboardDisplay, SidebarDisplay, endGameDisplay }
})();
	