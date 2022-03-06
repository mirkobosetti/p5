const BOARDSIZE = 400

var squares = []
var pieces = []

function setup() {
	createCanvas(BOARDSIZE, BOARDSIZE)

	for (y = 0; y < BOARDSIZE; y += BOARDSIZE / 8) {
		for (x = 0; x < BOARDSIZE; x += BOARDSIZE / 8) {
			squares.push(new Square(x, y))
		}
	}

	pieces.push(new Rook(squares[0], 1))
	pieces.push(new Knight(squares[1], 1))
	pieces.push(new Bishop(squares[2], 1))
	pieces.push(new Queen(squares[3], 1))
	pieces.push(new King(squares[4], 1))
	pieces.push(new Bishop(squares[5], 1))
	pieces.push(new Knight(squares[6], 1))
	pieces.push(new Rook(squares[7], 1))
	for (i = 8; i < 16; i++) pieces.push(new Pawn(squares[i], 1))

	for (i = 48; i < 56; i++) pieces.push(new Pawn(squares[i], 0))
	pieces.push(new Rook(squares[56], 0))
	pieces.push(new Knight(squares[57], 0))
	pieces.push(new Bishop(squares[58], 0))
	pieces.push(new Queen(squares[59], 0))
	pieces.push(new King(squares[60], 0))
	pieces.push(new Bishop(squares[61], 0))
	pieces.push(new Knight(squares[62], 0))
	pieces.push(new Rook(squares[63], 0))
}

function draw() {
	background(255)
	drawBoard()
	for (i = 0; i < pieces.length; i++) {
		pieces[i].show()
	}
}

// Function just for drawing the board
function drawBoard() {
	for (y = 0; y < BOARDSIZE; y += BOARDSIZE / 8) {
		for (x = 0; x < BOARDSIZE; x += BOARDSIZE / 8) {
			if (x % (BOARDSIZE / 4) == 0) {
				if (y % (BOARDSIZE / 4) == 0) fill(COLORS.BOARD.DARK)
				else if (y % (BOARDSIZE / 4) == BOARDSIZE / 8) fill(COLORS.BOARD.LIGHT)
			} else if (x % (BOARDSIZE / 4) == BOARDSIZE / 8) {
				if (y % (BOARDSIZE / 4) == BOARDSIZE / 8) fill(COLORS.BOARD.DARK)
				else if (y % (BOARDSIZE / 4) == 0) fill(COLORS.BOARD.LIGHT)
			}

			rect(x, y, BOARDSIZE / 8, BOARDSIZE / 8)
		}
	}
}
