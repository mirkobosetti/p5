const SCREEN_SIZE = 500

const COPS = 15
const SIZE = 10

var grid

function setup() {
	createCanvas(SCREEN_SIZE+1, SCREEN_SIZE+1)

	grid = create2DArray()

	for (let row = 0; row < SIZE; row++) {
		for (let column = 0; column < SIZE; column++) {
			grid[row][column] = new Cell(row * Math.floor(SCREEN_SIZE / SIZE), column * Math.floor(SCREEN_SIZE / SIZE), Math.floor(SCREEN_SIZE / SIZE))
		}
	}
}

function draw() {
	background(0)

	for (let row = 0; row < SIZE; row++) {
		for (let column = 0; column < SIZE; column++) {
			grid[row][column].show()
		}
	}
}

function create2DArray() {
	var arr = new Array(SIZE)

	for (let i = 0; i < SIZE; i++) {
		arr[i] = new Array(SIZE)
	}

	return arr
}
