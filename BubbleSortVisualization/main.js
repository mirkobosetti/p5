const width = 800
const height = 500
const values = []

var i = (j = 0)

function setup() {
	createCanvas(width, height)
	for (let i = 0; i < width; i++) values[i] = Math.random() * height
}

function draw() {
	background(0)

	if (i < values.length) {
		for (let j = 0; j < values.length; j++) {
			a = values[j]
			b = values[j + 1]
			if (a > b) {
				temp = a
				values[j] = values[j + 1]
				values[j + 1] = a
			}
		}
		if (j >= values.length - i - 1) i++
	}

	stroke(255)
	for (let i = 0; i < width; i++) {
		line(i, height, i, height - values[i])
	}
}
