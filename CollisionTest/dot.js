class Dot {
	constructor(id, x, y, diameter = 20, speed = 2) {
		this.id = id
		this.x = x
		this.y = y
		this.diameter = diameter
		this.speed = speed
	}

	update = dots => {
		const distanceX = dist(this.x, this.y, mouseX, this.y)
		const distanceY = dist(this.x, this.y, this.x, mouseY)

		const a = distanceY !== 0 ? distanceX / distanceY : 0
		const b = distanceX !== 0 ? distanceY / distanceX : 0

		var speedCoef = this.speed / (a + b)

		const speedX = a * speedCoef
		const speedY = b * speedCoef

		// for (let j = 0; j < DOTS_NUMBER; j++) {
		// 	canMove = !this.collide(dots[j])
		// 	if (!canMove) break
		// }

		if (this.x < mouseX) {
			//prendo tutti i dots che sono alla destra (e alla sinistra del mouse) e che hanno una y simile alla mia
			const dotsInTheWay = dots.filter(dot => dot.x > this.x && dot.x < mouseX)
			//.filter(dot => dot.y + this.diameter < this.y + this.diameter)
			//.filter(dot => dot.y - this.diameter < this.y - this.diameter)
			let canMoveX = true
			for (let i = 0; i < DOTS_NUMBER - 1; i++) {
				canMoveX = !this.collide({
					x: dots[i].x - speedX,
					y: dots[i].y,
				})
				if (!canMoveX) break
			}
			if (canMoveX) this.x += speedX
		}
		if (this.x > mouseX) {
			//const dotsInTheWay = dots.filter(dot => Math.abs(dot.x - this.x) < this.diameter)
			let canMoveX = true
			for (let i = 0; i < DOTS_NUMBER - 1; i++) {
				canMoveX = !this.collide({
					x: dots[i].x + speedX,
					y: dots[i].y,
				})
				if (!canMoveX) break
			}
			if (canMoveX) this.x -= speedX
		}

		if (this.y < mouseY) {
			//const dotsInTheWay = dots.filter(dot => Math.abs(dot.x - this.x) < this.diameter)
			let canMoveY = true
			for (let i = 0; i < DOTS_NUMBER - 1; i++) {
				canMoveY = !this.collide({
					x: dots[i].x,
					y: dots[i].y - speedY,
				})
				if (!canMoveY) break
			}
			if (canMoveY) this.y += speedY
		}
		if (this.y > mouseY) {
			//const dotsInTheWay = dots.filter(dot => Math.abs(dot.x - this.x) < this.diameter)
			let canMoveY = true
			for (let i = 0; i < DOTS_NUMBER - 1; i++) {
				canMoveY = !this.collide({
					x: dots[i].x,
					y: dots[i].y + speedY,
				})
				if (!canMoveY) break
			}
			if (canMoveY) this.y -= speedY
		}
	}

	/**
	 * Check if a Dot will collide with another Dot the next frame
	 * @param {Dot} b
	 * @returns true if a Dot will collide with another Dot the next frame
	 */
	collide = b => {
		return dist(this.x, this.y, b.x, b.y) <= this.diameter
	}
}
