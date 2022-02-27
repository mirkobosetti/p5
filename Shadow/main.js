const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

let boundaries = []
let dot

function setup() {
	createCanvas(WIDTH, HEIGHT)

	boundaries.push(new Boundary(300, 100, 300, 300))

	dot = new Dot()
}

function draw() {
	background(0)
	
	dot.update(boundaries)
	//dot.draw()
	
	for (const boundary of boundaries) boundary.draw()
	
}

function mouseDragged() {}
function mousePressed() {}
function mouseReleased() {}
