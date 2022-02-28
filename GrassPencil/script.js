// credit to: https://www.youtube.com/watch?v=0v4_Dw0K8pw

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = document.getElementById('canvas').offsetWidth
canvas.height = document.getElementById('canvas').offsetHeight

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

		this.ligthness = mainColor.l
	}

	update() {
		this.x += this.speedX + Math.sin(this.angleX)
		this.y += this.speedY + Math.sin(this.angleY)

		this.size += this.vs
		this.angleX += this.vaX
		this.angleY += this.vaY

		if (mainColor.useCandeggina && this.ligthness < 70)
			this.ligthness += 0.5

		if (this.size < this.maxSize) {
			ctx.beginPath()

			switch (selectedShape) {
				case 0:
					ctx.moveTo(this.x+9, this.y);
					ctx.lineTo(this.x-6, this.y+6);
					ctx.lineTo(this.x-3, this.y-6);
					break
				case 1:
					ctx.fillRect(this.x, this.y, 10, 10);
					break
				case 2:
					break
				case 3:
					ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
					break
			}

			ctx.fillStyle = `hsl(${mainColor.h}, ${mainColor.s}%, ${this.ligthness}%)`
			ctx.fill()
			ctx.stroke()
			requestAnimationFrame(this.update.bind(this))
		}
	}
}

canvas.addEventListener('mousemove', event => {
	if (drawing) {
		for (let i = 0; i < 5; i++) {
			const root = new Root(event.layerX, event.layerY)
			root.update()
		}
	}
})

canvas.addEventListener('mousedown', () => (drawing = true))
canvas.addEventListener('mouseup', () => (drawing = false))

let mainColor = {
	h: 140,
	s: 100,
	l: 10,
	useCandeggina: true,
}
function changeColor({ value }) {
	hsl = HexToHSL(value)
	mainColor.h = hsl.h
	mainColor.s = hsl.s
	mainColor.l = hsl.l
}

function HexToHSL(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

	var r = parseInt(result[1], 16)
	var g = parseInt(result[2], 16)
	var b = parseInt(result[3], 16)

	;(r /= 255), (g /= 255), (b /= 255)
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b)
	var h,
		s,
		l = (max + min) / 2

	if (max == min) {
		h = s = 0 // achromatic
	} else {
		var d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0)
				break
			case g:
				h = (b - r) / d + 2
				break
			case b:
				h = (r - g) / d + 4
				break
		}

		h /= 6
	}

	s = s * 100
	s = Math.round(s)
	l = l * 100
	l = Math.round(l)
	h = Math.round(360 * h)

	return { h, s, l }
}

function toggleCandeggina({ checked }) {
	mainColor.useCandeggina = checked
}

selectedShape = 3
function changeShape({value}) {
	selectedShape = +value
}
