class Gear {
	constructor(x, y, radius, offset, clockwise = true, speed, color) {
		this.x = x;
		this.y = y;
		this.radius = radius * 10;
		this.color = `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
		this.colorObj = color;
		this.speed = speed || 0;
		this.angularSpeed = speed / this.radius;
		this.clockwise = clockwise;
		this.angle = Math.PI / radius;
		this.offset = offset;
		this.teethW = this.radius / 5;
		this.teethH = this.radius * 2.7;
		this.fatherGear;
	}
	draw(ctx) {
		// if (second() % 2 == 0) {
		// 	jitter = random(-0.1, 0.1);
		// }
		// //increase the angle value using the most recent jitter value
		// angle = angle + jitter;
		// //use cosine to get a smooth CW and CCW motion when not jittering
		// var c = cos(angle);
		// //move the shape to the center of the canvas
		// translate(width / 2, height / 2);
		// //apply the final rotation
		// rotate(c);

		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.clockwise ? this.offset : -this.offset);
		this.offset += this.angularSpeed;
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.ellipse(0, 0, this.radius, this.radius, 0, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill();

		for (let angle = 0; angle < Math.PI * 2; angle += this.angle) {
			ctx.fillRect(
				0 - this.teethW / 2,
				0 - this.teethH / 2,
				this.teethW,
				this.teethH
			);
			ctx.rotate(this.angle);
		}

		ctx.fillStyle = bgColor;
		ctx.beginPath();
		ctx.ellipse(
			0,
			0,
			this.radius / 2.5,
			this.radius / 2.5,
			0,
			0,
			Math.PI * 2,
			false
		);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
	setSpeed(newSpeed) {
		this.speed = newSpeed;
		this.angularSpeed = newSpeed / this.radius;
	}
	updateSL(value) {
		this.color = `hsl(${this.colorObj.h}, ${value}%, ${this.colorObj.l}%)`;
	}
}
