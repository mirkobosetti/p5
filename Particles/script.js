// credit to: https://www.youtube.com/watch?v=XGioNBHrFU4

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = document.getElementById('canvas').offsetWidth
canvas.height = document.getElementById('canvas').offsetHeight

let particles = []

let mouse = {
	x: null,
	y: null,
	radius: 150,
}

window.addEventListener('mousemove', ({ x, y }) => {
	mouse.x = x
	mouse.y = y
})

ctx.fillStyle = 'white'
ctx.font = '30px Verdana'
ctx.fillText('SASSO', 0, 40)

// ctx.strokeStyle = 'white'
// ctx.strokeRect(0, 0, 150, 150)
const data = ctx.getImageData(0, 0, 150, 150)

class Particle {
	constructor(x, y) {
		this.x = x
		this.y = y
		this.size = 3
		this.baseX = this.x
		this.baseY = this.y
		this.density = Math.random() * 30 + 1
	}

	draw() {
		ctx.fillStyle = 'red'
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
		ctx.closePath()
		ctx.fill()
	}

	update() {
		let dx = mouse.x - this.x
		let dy = mouse.y - this.y

		let distanceFromMouse = Math.sqrt(dx * dx + dy * dy)
		if (distanceFromMouse < 100) this.size = 50
		else this.size = 3
	}
}

function init() {
	for (let i = 0; i < 1000; i++) {
		particles.push(
			new Particle(
				Math.random() * canvas.width,
				Math.random() * canvas.height
			)
		)
	}
}
init()

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	for (const particle of particles) {
		particle.draw()
		particle.update()
	}
	requestAnimationFrame(animate)
}
animate()
