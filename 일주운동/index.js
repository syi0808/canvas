import Particle from "./Particle.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

    this.particles = [];
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);
  }

  animate() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    window.requestAnimationFrame(this.animate.bind(this));

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(this.ctx);
    }
  }
}

window.onload = () => {
  const app = new App();

  for (let i = 0; i < 100; i++) {
    app.particles.push(
      new Particle(app.stageWidth / 2, app.stageHeight / 2, 3, app.stageHeight)
    );
  }
};
