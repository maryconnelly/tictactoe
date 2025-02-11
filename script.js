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

	function makeMove (activePlayer, index) {
		getBoard();
		if (activePlayer === playerOne && board[index] === "") {
		board[index] = "X";
		} else if 
			(activePlayer === playerTwo && board[index] === "") {
		} else {
			console.log("Invalid move");
		}
		console.log(board);

	}
				  
makeMove(playerOne, 0);
    
	return { displayBoard, switchTurns, makeMove }
	}
)();
	
					
					
					// const checkAvailableCells = () => {
						// 	const availableCells = () => board.filter((board) => board[cell].getValue() === "").map(board => board[cell]); 
						//     if (availableCells = []) {
							// 		checkWinner();
							//     } else {
								// 		return;
								// 	}
								// }
								
								// const checkWinner = () => {
									// 	if (board[0] === board[1] === board[2] ||
									//         board[3] === board[4] === board[5] ||
									//         board[6] === board[7] === board[8] ||
									//         board[0] === board[3] === board[6] ||
									//         board[1] === board[4] === board[7] ||
									//         board[2] === board[5] === board[8] ||
									//         board[0] === board[4] === board[8] ||
									//         board[6] === board[4] === board[2]) {
										// 			console.log(`${activePlayer} wins!`);
										//         } else {
											// 			console.log(`It's a draw!`);
											
											//         }
											// 	}
											