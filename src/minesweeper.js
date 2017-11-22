/*class Game {
	constructor(numberOfRows, numberOfColumns, numberOfBombs){
		this._board = new Board(numberOfRows, numberOfColumns,numberOfBombs);
	}//end constructor

	playMove(rowIndex, columnIndex){
		this._board.flipTile(rowIndex, columnIndex);
		if(this._board.playerBoard[rowIndex][columnIndex] === 'B'){
			console.log('Game Over!');
			this._board.print();
		}else if(!this._board.hasSafeTiles){
			console.log('You Won!');
		}else{
			console.log('Current Board:');
			this._board.print();
		}
	}//end of playMove method

} //end game class



//Board class
class Board {

	constructor(numberOfRows, numberOfColumns, numberOfBombs){
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = numberOfRows * numberOfColumns;
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
	}

	get playerBoard(){
		return this._playerBoard;
	}

	flipTile(rowIndex, columnIndex) {
		if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
			console.log ('This tile has already been flipped!');
			return;
		}else if(this._bombBoard[rowIndex][columnIndex] === 'B'){
			this._playerBoard[rowIndex][columnIndex] = 'B';
		}else{
			this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
		}

		this._numberOfTiles--;
	};

	getNumberOfNeighborBombs(rowIndex, columnIndex){
	const neighborOffsets = [
		[-1, -1], 
		[-1, 0], 
		[-1, 1], 
		[0, 1], 
		[1, 1], 
		[1, 0], 
		[1, -1], 
		[0, -1] 
	];

	const numberOfRows = this._bombBoard.length;
	const numberOfColumns = this._bombBoard[0].length;
	let numberOfBombs = 0;

	neighborOffsets.forEach(offset => {
		const neighborRowIndex = rowIndex + offset[0];
		const neighborColumnIndex = columnIndex + offset[1];
		if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
			
			if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
				numberOfBombs++;
			}
		}
	});

		return numberOfBombs;
	};

	hasSafeTiles(){
		return this._numberOfTiles !== this._numberOfBombs;
	}
	print() {
    	console.log(this.playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns){
		let board = [];
		for (let numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
			let row = [];
			for(let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
				row.push(' ');
			}
			board.push(row);
		}
		return board;
	};

	static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
		let board = [];
		for (let numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
			let row = [];
			for(let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
				row.push(' ');
			}
			board.push(row);
		}
		//bomb counter
		let numberOfBombsPlaced = 0;

		while (numberOfBombsPlaced < numberOfBombs) {
			let randomRowIndex = Math.floor(Math.random() * numberOfRows);
			let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
			if (board[randomRowIndex][randomColumnIndex] !== 'B'){
					board[randomRowIndex][randomColumnIndex] = 'B';
				numberOfBombsPlaced++;
			}
		}

		return board;
	};
}


const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for (let numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
		let row = [];
		for(let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (let numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
		let row = [];
		for(let numberOfColumnsIndex = 0; numberOfColumnsIndex < numberOfColumns; numberOfColumnsIndex++){
			row.push(' ');
		}
		board.push(row);
	}
	//bomb counter
	let numberOfBombsPlaced = 0;

	while (numberOfBombsPlaced < numberOfBombs) {
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		if (board[randomRowIndex][randomColumnIndex] !== 'B'){
				board[randomRowIndex][randomColumnIndex] = 'B';
				numberOfBombsPlaced++;
		}
	
		//An Updated printBoard() Function
	}

	return board;
}; 

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
	const neighborOffsets = [
		[-1, -1], 
		[-1, 0], 
		[-1, 1], 
		[0, 1], 
		[1, 1], 
		[1, 0], 
		[1, -1], 
		[0, -1] 
	];

	const numberOfRows = bombBoard.length;
	const numberOfColumns = bombBoard[0].length;
	let numberOfBombs = 0;

	neighborOffsets.forEach(offset => {
		const neighborRowIndex = rowIndex + offset[0];
		const neighborColumnIndex = columnIndex + offset[1];
		if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
			
			if(bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
				numberOfBombs++;
			}
		}
	});

	return numberOfBombs;
}; 

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
	if (playerBoard[rowIndex][columnIndex] !== ' ') {
		console.log ('This tile has already been flipped!');
		return;
	}else if(bombBoard[rowIndex][columnIndex] === 'B'){
		playerBoard[rowIndex][columnIndex] = 'B';
	}else{
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
	}

}; 

const printBoard = board => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
}; 



let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 1, 2);
console.log('Updated Player Board:');
printBoard(playerBoard); 

const g = new Game(3, 3, 3);
g.playMove(1, 0); */
