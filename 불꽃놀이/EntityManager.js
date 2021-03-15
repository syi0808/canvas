import Entity from "./Entity";

export default class EntityManager {
  static instance;

  static addEntity(entity) {
    EntityManager.instance.addEntity(entity);
  }

  static removeEntity(entity) {
    EntityManager.instance.removeEntity(entity);
  }

  constructor() {
    EntityManager.instance = this;
    this.entities = [];
  }

  update() {
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].update();
    }
  }

  render(context) {
    context.beginPath();
    context.fillStyle = "rgba(0, 0, 0, .2)";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fill();

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].render(context);
    }
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  removeEntity(entity) {
    const entityIndex = this.entities.indexOf(entity);

    if (entityIndex > -1) {
      this.entities.splice(entityIndex, 1);
    }
  }
}
