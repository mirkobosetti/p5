const WIDTH = 800 //window.innerWidth
const HEIGHT = 500 //window.innerHeight

const DOTS_NUMBER = 200
const DOTS_SIZE = 3
const DOTS_SPEED = 5
var dots = []

function setup() {
	createCanvas(WIDTH, HEIGHT)
	for (let i = 0; i < DOTS_NUMBER; i++) {
		const x = int(random() * WIDTH)
		const y = int(random() * HEIGHT)
		dots.push(new Dot(i, x, y, DOTS_SIZE, DOTS_SPEED))
	}
}

function draw() {
	background(0)

	stroke(255)
	for (let i = 0; i < DOTS_NUMBER; i++) {
		if (!mouseX) return

		dots[i].update(dots.filter(f => f.id != dots[i].id))

		circle(dots[i].x, dots[i].y, dots[i].diameter)
	}
}
