class Ray {
	constructor(position, angle) {
		this.position = position
		this.direction = p5.Vector.fromAngle(angle)
	}

	draw(pt) {
		stroke(255)
		push()
		line(
			this.position.x,
			this.position.y,
			pt.x ?? this.direction.x * 10000,
			pt.y ?? this.direction.y * 10000
		)
		pop()
	}

	update(position) {
		this.position = position
	}

	lookAtPoint(x, y) {
		this.direction.x = x - this.position.x
		this.direction.y = y - this.position.y
		this.direction.normalize()
	}

	cast(boundary) {
		// wall start and end points
		const x1 = boundary.a.x
		const y1 = boundary.a.y
		const x2 = boundary.b.x
		const y2 = boundary.b.y

		// vector
		const x3 = this.position.x
		const y3 = this.position.y
		const x4 = this.position.x + this.direction.x
		const y4 = this.position.y + this.direction.y

		const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)

		// check if 0, lines are parallels
		if (den == 0) return false

		const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
		const u = -(((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den)

		if (t > 0 && t < 1 && u > 0) {
			//get the point of intersection
			return createVector(
				/* X */ x1 + t * (x2 - x1),
				/* Y */ y1 + t * (y2 - y1)
			)
		}
		return false
	}
}
