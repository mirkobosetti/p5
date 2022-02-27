class Dot {
	constructor(id, x, y, diameter = 20, speed = 2, color) {
		this.id = id
		this.x = x
		this.y = y
		this.diameter = diameter
		this.speed = speed
		this.color = color
	}

	update = dots => {
		const distanceX = dist(this.x, this.y, mouseX, this.y)
		const distanceY = dist(this.x, this.y, this.x, mouseY)

		const a = distanceY !== 0 ? distanceX / distanceY : 0
		const b = distanceX !== 0 ? distanceY / distanceX : 0

		var speedCoef = this.speed / (a + b)

		const speedX = a * speedCoef
		const speedY = b * speedCoef


		if (Math.random() > 0.5) {
			if (this.x < mouseX) {
				//prendo tutti i dots che sono alla destra (e alla sinistra del mouse) e che hanno una y simile alla mia /*&& d.x < mouseX*/
				const dotsInTheWay = dots.filter(d => d.x + d.diameter > this.x)
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
				//if (canMoveX) this.x += speedX < mouseX - this.x ? speedX : mouseX - this.x
				if (canMoveX) this.x += speedX
			}
			if (this.x > mouseX) {
				const dotsInTheWay = dots.filter(d => d.x - d.diameter < this.x)
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
		} else {
			if (this.x > mouseX) {
				const dotsInTheWay = dots.filter(d => d.x - d.diameter < this.x)
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
			if (this.x < mouseX) {
				//prendo tutti i dots che sono alla destra (e alla sinistra del mouse) e che hanno una y simile alla mia /*&& d.x < mouseX*/
				const dotsInTheWay = dots.filter(d => d.x + d.diameter > this.x)
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
				//if (canMoveX) this.x += speedX < mouseX - this.x ? speedX : mouseX - this.x
				if (canMoveX) this.x += speedX
			}
		}

		if (Math.random() > 0.5) {
			if (this.y < mouseY) {
				const dotsInTheWay = dots.filter(d => d.y + d.diameter > this.y)
				let canMoveY = true
				for (let i = 0; i < dotsInTheWay.length; i++) {
					canMoveY = !this.collide({
						x: dotsInTheWay[i].x,
						y: dotsInTheWay[i].y - speedY,
					})
					if (!canMoveY) break
				}
				if (canMoveY) this.y += speedY
			}
			if (this.y > mouseY) {
				const dotsInTheWay = dots.filter(d => d.y - d.diameter < this.y)
				let canMoveY = true
				for (let i = 0; i < dotsInTheWay.length; i++) {
					canMoveY = !this.collide({
						x: dotsInTheWay[i].x,
						y: dotsInTheWay[i].y + speedY,
					})
					if (!canMoveY) break
				}
				if (canMoveY) this.y -= speedY
			}
		} else {
			if (this.y > mouseY) {
				const dotsInTheWay = dots.filter(d => d.y - d.diameter < this.y)
				let canMoveY = true
				for (let i = 0; i < dotsInTheWay.length; i++) {
					canMoveY = !this.collide({
						x: dotsInTheWay[i].x,
						y: dotsInTheWay[i].y + speedY,
					})
					if (!canMoveY) break
				}
				if (canMoveY) this.y -= speedY
			}
			if (this.y < mouseY) {
				const dotsInTheWay = dots.filter(d => d.y + d.diameter > this.y)
				let canMoveY = true
				for (let i = 0; i < dotsInTheWay.length; i++) {
					canMoveY = !this.collide({
						x: dotsInTheWay[i].x,
						y: dotsInTheWay[i].y - speedY,
					})
					if (!canMoveY) break
				}
				if (canMoveY) this.y += speedY
			}
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
