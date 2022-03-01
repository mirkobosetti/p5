// credit to: https://www.youtube.com/watch?v=0v4_Dw0K8pw

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.height = document.getElementById('canvas').offsetHeight
canvas.width = document.getElementById('canvas').offsetWidth

console.log(canvas.width, canvas.height)

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

		if (mainColor.useCandeggina && this.ligthness < 70) this.ligthness += 0.5

		if (this.size < this.maxSize) {
			ctx.beginPath()

			switch (selectedShape) {
				case 0:
					ctx.moveTo(this.x + 9, this.y)
					ctx.lineTo(this.x - 6, this.y + 6)
					ctx.lineTo(this.x - 3, this.y - 6)
					break
				case 1:
					ctx.fillRect(this.x, this.y, 10, 10)
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

// canvas.addEventListener('mousedown', () => (drawing = true))
// canvas.addEventListener('mouseup', () => (drawing = false))

class Board {
	show() {
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				ctx.fillStyle = (i + j) % 2 != 0 ? COLORS.BOARD.LIGHT : COLORS.BOARD.DARK

				ctx.beginPath()
				ctx.fillRect(i * 100, j * 100, 100, 100)
				ctx.fill()
				ctx.stroke()
				ctx.closePath()
				//requestAnimationFrame(this.show.bind(this))
			}
		}
	}
}

const COLORS = {
	SET: {
		WHITE: '#F2F2F2',
		BLACK: '#A6785D',
	},
	BOARD: {
		BORDER: '#F2CCB6',
		LIGHT: '#F2E3B6',
		DARK: '#401D09',
	},
}

const PIECES = {
	KING: 0,
	QUEEN: 1,
	ROOK: 2,
	BISHOPS: 3,
	KNIGHT: 4,
	PAWN: 5,
}

new Board().show()
