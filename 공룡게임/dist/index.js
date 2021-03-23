import Character from "./Character.js";
class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw(ctx, x, y, pixelRatio) {
    const pr = pixelRatio;
  }
}
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = 3;
    this.character = new Character(this.ctx, this.pixelRatio);
    this.Land = new Land(this.ctx, this.pixelRatio);
    this.init();
    this.x = 0;
    this.character.draw(0, 0);
    window.requestAnimationFrame(this.draw.bind(this));
  }
  init() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }
  draw() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.x += 0.2;
    this.Land.draw();
    this.character.draw(this.x, 0);
    window.requestAnimationFrame(this.draw.bind(this));
  }
}
class Hurdle {
  constructor(pixelRatio) {
    this.pixelRatio = pixelRatio;
    this.number = Math.round(Math.random() * 2) + 1;
  }
}
class Land {
  constructor(ctx, pixelRatio) {
    this.pixelRatio = pixelRatio;
    this.ctx = ctx;
    this.isHill = false;
    this.isUphill = false;
    this.hillLength = 0;
    this.hillMaxLength = 4;
    this.LandArray = [];
    this.defaultHeight = 100;
    this.hillMaxHeight = 96;
    this.height = this.defaultHeight;
  }
  draw() {
    // 만약 언덕이라면
    if (this.isHill) {
      // 만약 오르막 이라면
      if (this.isUphill) {
        this.height -= 1;
        if (this.height <= this.hillMaxHeight) {
          this.height += 1;
          if (this.hillLength <= 0) {
            this.isUphill = false;
          }
          this.hillLength -= 1;
        }
      } // 만약 내리막 이라면
      else {
        this.height += 1;
        if (this.height >= this.defaultHeight) {
          this.isHill = false;
        }
      }
    }
    this.LandArray.push({ x: document.body.clientWidth, y: this.height });
    this.LandArray.forEach((vector, index) => {
      if (vector.x < 0) {
        this.LandArray.shift();
        return;
      }
      this.LandArray[index].x = vector.x - this.pixelRatio;
      this.ctx.fillRect(
        vector.x - this.pixelRatio,
        vector.y,
        this.pixelRatio,
        this.pixelRatio
      );
    });
    if (Math.round(Math.random() * 300) === 5) {
      this.isHill = true;
      this.isUphill = true;
      this.hillMaxHeight = 95 + Math.round(Math.random() * 3);
      this.hillLength = Math.round(Math.random() * 2) + 1;
      return;
    }
  }
}
class Cloud {}
window.onload = () => {
  new App();
};
//# sourceMappingURL=index.js.map
