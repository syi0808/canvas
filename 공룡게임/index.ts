import Character from "./Character";

class Entity {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(ctx, x, y, pixelRatio) {
    const pr = pixelRatio;
  }
}

class App {
  character: Character;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  stageWidth: number;
  stageHeight: number;
  x: number;
  pixelRatio: number;
  Land: Land;
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
  pixelRatio: number;
  number: number;
  constructor(pixelRatio: number) {
    this.pixelRatio = pixelRatio;
    this.number = Math.round(Math.random() * 2) + 1;
  }
}

interface Vector {
  x: number;
  y: number;
}

class Land {
  pixelRatio: number;
  ctx: CanvasRenderingContext2D;
  y: number;
  isHill: boolean;
  isUphill: boolean;
  LandArray: Vector[];
  hillLength: number;
  hillMaxHeight: number;
  constructor(ctx, pixelRatio) {
    this.pixelRatio = pixelRatio;
    this.ctx = ctx;
    this.isHill = false;
    this.isUphill = false;
    this.hillLength = 0;
    this.LandArray = [];
    this.hillMaxHeight = 4;
  }
  draw() {
    // 만약 언덕이라면
    if (this.isHill) {
      // 만약 오르막 이라면
      if (this.isUphill) {
        if (this.LandArray[this.LandArray.length - 1].y >= this.hillMaxHeight) {
          this.isUphill = false;
          return;
        }
      } // 만약 내리막 이라면
      else {
        return;
      }
    }
    this.LandArray.push({ x: 10, y: 10 });
    this.LandArray.forEach((vector: Vector, index: number) => {
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
    if (Math.round(Math.random() * 10) === 5) {
      this.isHill = true;
      this.hillLength = Math.round(Math.random() * 4) + 1;
      return;
    }
  }
}

class Cloud {}

window.onload = () => {
  new App();
};
