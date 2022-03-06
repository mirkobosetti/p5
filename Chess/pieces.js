class Pawn {
	constructor(square, col) {
		this.x = square.x + 25
		this.y = square.y + 25
		this.col = col
	}

	show() {
		push()
		if (this.col == 1) {
			stroke(255)
			fill(0)
		} else {
			stroke(0)
			fill(255)
		}
		ellipse(this.x, this.y, 30)
		pop()
	}
}

class Rook {
	constructor(square, col) {
		this.x = square.x + 25
		this.y = square.y + 25
		this.col = col
	}

	show() {
		push()
		if (this.col == 1) {
			stroke(255)
			fill(0)
		} else {
			stroke(0)
			fill(255)
		}
		ellipse(this.x, this.y, 30)
		pop()
	}
}

class Knight {
	constructor(square, col) {
		this.x = square.x + 25
		this.y = square.y + 25
		this.col = col
	}

	show() {
		push()
		if (this.col == 1) {
			stroke(255)
			fill(0)
		} else {
			stroke(0)
			fill(255)
		}
		ellipse(this.x, this.y, 30)
		pop()
	}
}

class Bishop {
	constructor(square, col) {
		this.x = square.x + 25
		this.y = square.y + 25
		this.col = col
	}

	show() {
		push()
		if (this.col == 1) {
			stroke(255)
			fill(0)
		} else {
			stroke(0)
			fill(255)
		}
		ellipse(this.x, this.y, 30)
		pop()
	}
}

class Queen {
	constructor(square, col) {
		this.x = square.x + 25
		this.y = square.y + 25
		this.col = col
	}

	show() {
		push()
		if (this.col == 1) {
			stroke(255)
			fill(0)
		} else {
			stroke(0)
			fill(255)
		}
		ellipse(this.x, this.y, 30)
		pop()
	}
}

class King {
	constructor(square, col) {
		this.x = square.x + 25
		this.y = square.y + 25
		this.col = col
	}

	show() {
		push()
		if (this.col == 1) {
			stroke(255)
			fill(0)
		} else {
			stroke(0)
			fill(255)
		}
		ellipse(this.x, this.y, 30)
		pop()
	}
}
