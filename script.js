const Gameboard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""];
    // for(i=0;i<3;i++) {
    //     board[i] = [];
    //     for(j=0;j<3;j++) {
    //         board[i].push(j);
    //     }
    // }
	const [ topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight ] = board;
    return { board };
})();

console.log(Gameboard);

//Players stored in objects
function Players (playerName, marker) { 
    return { playerName, marker };
}

const playerOne = Players("Mary", "X");
const playerTwo = Players("Asher", "O"); 
console.log(playerOne);
console.log(playerTwo);


//Object to control the flow of the game
const GameController = (function () {
    
    const displayBoard = () => console.log(board);
	console.log(displayBoard);

	let activePlayer = playerOne;
	function switchTurns () {
		if (activePlayer = playerOne) {
				activePlayer = playerTwo;
		} else {
				activePlayer = playerOne;
		}
		return { activePlayer };
	}
	console.log(activePlayer);
	switchTurns();
	console.log(activePlayer)
    
	return { displayBoard, switchTurns }

})();
	// makeMove(playerOne, topLeft.board);
// const newRound = () => {
	//     displayBoard();
	//     console.log(`${activePlayer}'s turn.`); 
	// }
	
	// const makeMove = (activePlayer, selectedCell) => {
		//     if (activePlayer === playerOne && selectedCell.value === "") {
			//         return selectedCell.value = "X";
			//     } else if (activePlayer === playerTwo && selectedCell.value === "") {
				//         return selectedCell.value = "0";
				//     } else {
					//         return console.log(`Invalid selection`);
					//     }
					// }
					
					
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
											