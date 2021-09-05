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


		if (this.x < mouseX) {
			//prendo tutti i dots che sono alla destra (e alla sinistra del mouse) e che hanno una y simile alla mia
			const dotsInTheWay = dots.filter(d => d.x - d.diameter > this.x /*&& d.x < mouseX*/)
			//.filter(dot => dot.y + this.diameter < this.y + this.diameter)
			//.filter(dot => dot.y - this.diameter < this.y - this.diameter)
			let canMoveX = true
			for (let i = 0; i < dotsInTheWay.length; i++) {
				canMoveX = !this.collide({
					x: dotsInTheWay[i].x - speedX,
					y: dotsInTheWay[i].y,
				})
				if (!canMoveX) break
			}
			if (canMoveX) this.x += speedX
		}
		
		if (this.x > mouseX) {
			const dotsInTheWay = dots.filter(d => d.x +d.diameter < this.x)
			let canMoveX = true
			for (let i = 0; i < dotsInTheWay.length; i++) {
				canMoveX = !this.collide({
					x: dotsInTheWay[i].x + speedX,
					y: dotsInTheWay[i].y,
				})
				if (!canMoveX) break
			}
			if (canMoveX) this.x -= speedX
		}

		if (this.y < mouseY) {
			const dotsInTheWay = dots.filter(d => d.y - d.diameter > this.y)
			let canMoveY = true
			for (let i = 0; i < dotsInTheWay.length - 1; i++) {
				canMoveY = !this.collide({
					x: dotsInTheWay[i].x,
					y: dotsInTheWay[i].y - speedY,
				})
				if (!canMoveY) break
			}
			if (canMoveY) this.y += speedY
		}

		if (this.y > mouseY) {
			const dotsInTheWay = dots.filter(d => d.y + d.diameter < this.y)
			let canMoveY = true
			for (let i = 0; i < dotsInTheWay.length - 1; i++) {
				canMoveY = !this.collide({
					x: dotsInTheWay[i].x,
					y: dotsInTheWay[i].y + speedY,
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
