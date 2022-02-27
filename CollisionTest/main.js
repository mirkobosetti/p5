const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

const DOTS_NUMBER = 200
const DOTS_SIZE = 5
const DOTS_SPEED = 5
var dots = []

function setup() {
	createCanvas(WIDTH, HEIGHT)
	for (let i = 0; i < DOTS_NUMBER; i++) {
		const x = int(random() * WIDTH)
		const y = int(random() * HEIGHT)
		dots.push(new Dot(i, x, y, DOTS_SIZE, DOTS_SPEED, i))
	}
}

function draw() {
	colorMode(HSB)
	background(0)
	stroke(255)

	let idsToUpdate = dots.map(m => m.id)

	for (let i = 0; i < dots.length; i++) {
		if (!mouseX) return
		
		let idToUpdate = idsToUpdate[Math.floor(Math.random() * idsToUpdate.length)]
		
		fill(dots[idToUpdate].color, 255, 255)
		// stroke(i*360, 255, 255)
		
		dots[idToUpdate].update(dots.filter(f => f.id != dots[idToUpdate].id))

		
		circle(dots[idToUpdate].x, dots[idToUpdate].y, dots[idToUpdate].diameter)

		idsToUpdate = idsToUpdate.filter(f => f != idToUpdate)
	}
}

function mouseClicked() {
	const x = int(random() * WIDTH)
	const y = int(random() * HEIGHT)
	dots.push(new Dot(dots.length, x, y, DOTS_SIZE, DOTS_SPEED, Math.random()*360))
}
