class Cell {
	constructor(x, y, size) {
		this.x = x
		this.y = y
		this.isRevealed = true
		this.isCop = true
		this.size = size
	}

	show() {
		stroke(255)
		fill(0)
		rect(this.x, this.y, this.size, this.size)
	}
}
