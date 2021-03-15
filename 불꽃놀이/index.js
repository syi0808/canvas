import Time from "./Time";
import EntityManager from "./EntityManager";
import Firework from "./Firework";
import Vector from "./Vector";

class App {
  constructor(props) {
    this.ref = props;
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.ref.appendChild(this.canvas);
    this.canvas.width = document.body.clientWidth * 2;
    this.canvas.height = document.body.clientHeight * 2;
    this.entityManager = new EntityManager();
  }

  play = () => {
    Time.start();
    this.handleRequestFrame = window.requestAnimationFrame(this.onEnterFrame);
  };

  pause = () => {
    if (this.handleRequestFrame === null) {
      return;
    }

    window.cancelAnimationFrame(this.handleRequestFrame);
  };

  onEnterFrame = () => {
    Time.update();
    this.entityManager.update();
    this.entityManager.render(this.context);
    this.handleRequestFrame = window.requestAnimationFrame(this.onEnterFrame);
  };
}

window.addEventListener("load", () => {
  const app = new App(document.body);
  const createFirework = () => {
    const firework = new Firework({
      position: new Vector(
        document.body.clientWidth * Math.random(),
        document.body.clientHeight
      ),
    });

    app.entityManager.addEntity(firework);
  };

  createFirework();
  setInterval(() => {
    createFirework();
  }, 700);

  app.play();
});
