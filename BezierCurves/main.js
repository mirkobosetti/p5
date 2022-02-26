const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const POINT_WEIGTH = 24

var p1 = null
var p2 = null
var p3 = null
var p4 = null

function setup() {
	createCanvas(WIDTH, HEIGHT)

	p1 = createVector(WIDTH / 10, HEIGHT / 2)
	p2 = createVector(WIDTH / 2, HEIGHT / 10)
	p3 = createVector(WIDTH / 2, HEIGHT - HEIGHT / 10)
	p4 = createVector(WIDTH - WIDTH / 10, HEIGHT / 2)
}

function draw() {
	background(0)
	stroke(255)
	strokeWeight(POINT_WEIGTH)

	point(p1)
	point(p2)
	point(p3)
	point(p4)

	strokeWeight(4)
	noFill()
	//bezier(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y)

	beginShape()
	vertex(p1.x, p1.y)
	bezierVertex(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y)
	bezierVertex(p3.x, p3.y, p2.x, p2.y, p1.x, p1.y)
	endShape()

	line(p1.x, p1.y, p2.x, p2.y)
	line(p3.x, p3.y, p4.x, p4.y)
}

function mouseDragged() {
	if (dist(p1.x, p1.y, mouseX, mouseY) < POINT_WEIGTH || movingPoint == 1) {
		p1.x = mouseX
		p1.y = mouseY
	} else if (dist(p2.x, p2.y, mouseX, mouseY) < POINT_WEIGTH || movingPoint == 2) {
		p2.x = mouseX
		p2.y = mouseY
	} else if (dist(p3.x, p3.y, mouseX, mouseY) < POINT_WEIGTH || movingPoint == 3) {
		p3.x = mouseX
		p3.y = mouseY
	} else if (dist(p4.x, p4.y, mouseX, mouseY) < POINT_WEIGTH || movingPoint == 4) {
		p4.x = mouseX
		p4.y = mouseY
	}

	// prevent default
	return false
}

var movingPoint = -1

function mousePressed() {
	if (dist(p1.x, p1.y, mouseX, mouseY) < POINT_WEIGTH) {
		movingPoint = 1
	} else if (dist(p2.x, p2.y, mouseX, mouseY) < POINT_WEIGTH) {
		movingPoint = 2
	} else if (dist(p3.x, p3.y, mouseX, mouseY) < POINT_WEIGTH) {
		movingPoint = 3
	} else if (dist(p4.x, p4.y, mouseX, mouseY) < POINT_WEIGTH) {
		movingPoint = 4
	}
}

function mouseReleased() {
	movingPoint = -1
}
