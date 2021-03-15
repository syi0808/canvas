import Vector from "./Vector.js";

const PI2 = Math.PI * 2;

function rangeSelectionRandom(min, max) {
  return Math.random() * (max * 2) - Math.abs(min);
}

class Particle {
  constructor(x, y, radius, cycleRadius) {
    this.position = new Vector(x, y);
    this.speed = 0.005 + Math.random() * 0.004;
    this.radians = 0;
    this.originX = x;
    this.originY = y;
    this.radius = radius;
    this.cycleRadius = cycleRadius + rangeSelectionRandom(-100, 100);
    this.radians = Math.random() * 20;
    this.color = `rgb(0, ${Math.random() * 175 + 80}, ${
      Math.random() * 175 + 80
    })`;
  }

  update(ctx) {
    this.radians += this.speed;
    this.position.x =
      Math.cos(this.radians) * (this.cycleRadius / 2) + this.originX / 2;
    this.position.y =
      Math.sin(this.radians) * (this.cycleRadius / 2) + this.originY;
    this.draw(ctx);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.radius, 0, PI2);
    ctx.fill();
  }
}

export default Particle;
