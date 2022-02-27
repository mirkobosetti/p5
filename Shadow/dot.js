class Dot {
	constructor() {
		this.position = createVector()
		this.rays = []

		for (let i = 0; i < 360; i += 10)
			this.rays.push(new Ray(this.position, radians(i)))
	}

	draw() {
		//stroke(255)
		//circle(this.position.x, this.position.y, 8, 8)
	}

	update(boundaries) {
		this.position.set(mouseX, mouseY)

		for (const ray of this.rays) {
			ray.update(this.position)

			for (const boundary of boundaries) {
				let pt = ray.cast(boundary)
	
				if (pt) {
					fill(255)
					ellipse(pt.x, pt.y, 8, 8)
				}
				ray.draw(pt)
			}
		}
	}
}
