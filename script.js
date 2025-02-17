// //To-Do's
// draw result
// winner display
// styling


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
				
			} else if (Gameboard.boardArray[0] !== "" && Gameboard.boardArray[1] !== "" && Gameboard.boardArray[2] !== "" && Gameboard.boardArray[3] !== "" && Gameboard.boardArray[4] !== "" && Gameboard.boardArray[5] !== "" && Gameboard.boardArray[6] !== "" && Gameboard.boardArray[7] !== "" && Gameboard.boardArray[8] !== "") {
				
			} else {
				DisplayController.resultDisplay.textContent = "";
			}
		};

		return { makeMove, checkWinner }
	})();

const DisplayController = (function () {

	const container = document.querySelector(".container");
		document.body.appendChild(container);
	
	const resultDisplay = document.querySelector(".result-display");
		container.appendChild(resultDisplay);

		
		
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
					square.textContent = "X"
						square.style.color = "#2978A0";
						square.style.fontSize = "80px";
					GameController.checkWinner();
					Players.activePlayer = Players.playerTwo;
					SidebarDisplay.playerTwoLabel.style.transform = "scale(1.2)";
					SidebarDisplay.playerOneLabel.style.transform = "scale(1)";
					SidebarDisplay.playerTwoLabel.textContent = `X: ${SidebarDisplay.playerTwoInput.value}'s turn`;
					SidebarDisplay.playerOneLabel.textContent = `O: ${SidebarDisplay.playerOneInput.value}`;
					
				} else if (square.textContent === "" && Players.activePlayer === Players.playerTwo) {
					GameController.makeMove(Players.playerTwo, (i - 1) + 1);
					square.textContent = "O";
						square.style.color = "#A38F52";
						square.style.fontSize = "80px";
					GameController.checkWinner();
					Players.activePlayer = Players.playerOne;
					SidebarDisplay.playerOneLabel.style.transform = "scale(1.2)";
					SidebarDisplay.playerTwoLabel.style.transform = "scale(1)";
					SidebarDisplay.playerOneLabel.textContent = `O: ${SidebarDisplay.playerOneInput.value}'s turn`;
					SidebarDisplay.playerTwoLabel.textContent = `X: ${SidebarDisplay.playerTwoInput.value}`;
				}


				console.log(Gameboard.boardArray);
				console.log(`${Players.activePlayer} is active`);
				console.log(`Winner is ${Players.winner}`);
			})
		} 

			return { boardDisplay  }
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
				playerOneLabel.textContent = "Player One's Name:";
					playerOneLabel.style.color = "#2978A0";
					playerOneLabel.style.fontSize = "40px";
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
					playerTwoLabel.textContent = "Player Two's Name:";
						playerTwoLabel.style.color = "#A38F52";
						playerTwoLabel.style.fontSize = "40px";
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
					playerOneLabel.style.gridArea = "2 / 1 / 3 / 2";
					playerOneLabel.style.justifySelf = "end";
					playerOneLabel.style.fontSize = "24px";
					playerOneLabel.textContent = `X: ${playerOneInput.value}'s turn`;
					SidebarDisplay.playerOneLabel.style.transform = "scale(1.5)";
					playerTwoInput.style.display = "none";
					playerTwoLabel.style.gridArea = "4 / 1 / 5 / 2";
					playerTwoLabel.style.justifySelf = "end";
					playerTwoLabel.style.fontSize = "24px";
					playerTwoLabel.textContent = `O: ${playerTwoInput.value}`;
					playButton.style.display = "none";
					sidebar.style.gridArea = "1 / 1 / 3 / 2";
					GameboardDisplay.boardDisplay.style.display = "grid";
				});
					
				return { sidebar, playerOneInput, playerOneLabel, playerTwoInput, playerTwoLabel, playButton }	
			})();			
			
return { container, resultDisplay, GameboardDisplay, SidebarDisplay }
})();
