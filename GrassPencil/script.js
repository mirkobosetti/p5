// credit to: https://www.youtube.com/watch?v=0v4_Dw0K8pw


/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let drawing = false

class Root {
	constructor(x, y) {
		this.x = x
		this.y = y
		this.speedX = Math.random() * 4 - 2
		this.speedY = Math.random() * 4 - 2
		this.maxSize = Math.random() * 7 + 5

		this.size = Math.random() * 1 + 2
		this.vs = Math.random() * 0.2 + 0.05

		this.angleX = Math.random() * 6.2
		this.vaX = Math.random() * 0.6 - 0.3

		this.angleY = Math.random() * 6.2
		this.vaY = Math.random() * 0.6 - 0.3

		this.ligthness = 10
	}

	update() {
		this.x += this.speedX + Math.sin(this.angleX)
		this.y += this.speedY + Math.sin(this.angleY)

		this.size += this.vs
		this.angleX += this.vaX
		this.angleY += this.vaY

		if (this.ligthness < 70) this.ligthness += 0.5

		if (this.size < this.maxSize) {
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
			ctx.fillStyle = `hsl(140, 100%, ${this.ligthness}%)`
			ctx.fill()
			ctx.stroke()
			requestAnimationFrame(this.update.bind(this))
		}
	}
}

window.addEventListener('mousemove', event => {
	if (drawing) {
		for (let i = 0; i < 5; i++) {
			const root = new Root(event.x, event.y)
			root.update()
		}
	}
})

window.addEventListener('mousedown', () => (drawing = true))
window.addEventListener('mouseup', () => (drawing = false))
