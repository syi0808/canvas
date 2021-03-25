import Character from "./Character";

function randomPercent(percent: number) {
  return Math.ceil(Math.random() * (100 / percent)) === 1;
}

function randomLength(max: number) {
  return Math.round(Math.random() * (max - 1) + 1);
}

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
  land: Land;
  walkSceneNunber: number;
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = 3;
    this.character = new Character(this.ctx, this.pixelRatio);
    this.land = new Land(this.ctx, this.pixelRatio);
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
    this.land.draw();
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
  landArray: Vector[];
  hillLength: number;
  hillMaxHeight: number;
  defaultHeight: number;
  height: number;
  constructor(ctx, pixelRatio) {
    this.pixelRatio = pixelRatio;
    this.ctx = ctx;
    this.isHill = false;
    this.isUphill = false;
    this.hillLength = 0;
    this.landArray = [];
    this.defaultHeight = 100;
    this.hillMaxHeight = 96;
    this.height = this.defaultHeight;
  }
  draw() {
    if (this.isHill) {
      if (this.isUphill) {
        this.height -= 1;
        if (this.height <= this.hillMaxHeight) {
          this.height += 1;
          if (this.hillLength <= 0) {
            this.isUphill = false;
          }
          this.hillLength -= 1;
        }
      } else {
        this.height += 1;
        if (this.height >= this.defaultHeight) {
          this.isHill = false;
        }
      }
    }
    this.landArray.push({ x: document.body.clientWidth, y: this.height });
    this.landArray.forEach((vector, index) => {
      if (vector.x < 0) {
        this.landArray.shift();
        return;
      }
      this.landArray[index].x = vector.x - this.pixelRatio;
      this.ctx.fillRect(
        vector.x - this.pixelRatio,
        vector.y,
        this.pixelRatio,
        this.pixelRatio
      );
    });
    //Math.round(Math.random() * 300) === 5
    if (randomPercent(0.5)) {
      this.isHill = true;
      this.isUphill = true;
      this.hillMaxHeight = 95 + Math.round(Math.random() * 3);
      this.hillLength = Math.round(Math.random() * 2) + 1;
    }
  }
}

class Dust {
  pixelRatio: number;
  ctx: CanvasRenderingContext2D;
  dustArray: Vector[];
  dustLength: number;
  isDust: boolean;
  dustHeight: number;
  constructor(ctx, pixelRatio) {
    this.dustArray = [];
    this.pixelRatio = pixelRatio;
    this.ctx = ctx;
  }

  draw() {
    this.dustArray.forEach((vector: Vector, index: number) => {
      if (vector.x === 0 && vector.y === 0) return;
      this.dustArray[index].x = vector.x - this.pixelRatio;
      this.ctx.fillRect(
        vector.x - this.pixelRatio,
        vector.y,
        this.pixelRatio,
        this.pixelRatio
      );
    });
    if (this.isDust) {
      this.dustArray.push({
        x: document.body.clientWidth,
        y: this.dustHeight + 96,
      });
    } else {
      this.dustArray.push({ x: 0, y: 0 });
      if (randomPercent(5)) {
        this.isDust = true;
        this.dustLength = Math.round(Math.random() * 4 + 1);
        this.dustHeight = Math.round(Math.random() * 6 + 1);
      }
    }
  }
}

class Cloud {}

window.onload = () => {
  new App();
};
