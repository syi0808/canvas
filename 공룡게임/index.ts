import Character from "./Character";

function randomPercent(percent: number): boolean {
    return Math.ceil(Math.random() * (100 / percent)) === 1;
}

function randomLength(max: number, min: number, pixelRatio: number): number {
    const pixelMax: number = max * pixelRatio;
    const pixelMin: number = min * pixelRatio;
    const randomMax: number = pixelMax - pixelMin;
    return Math.round(Math.random() * randomMax) + pixelMin;
}

function pixelConvert(number: number, pixelRatio: number): number {
    return number * pixelRatio;
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
    dust: Dust;
    land: Land;
    stageWidth: number;
    stageHeight: number;
    x: number;
    pixelRatio: number;
    walkSceneNunber: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.pixelRatio = 3;
        this.character = new Character(this.ctx, this.pixelRatio, 0, 0);
        this.land = new Land(this.ctx, this.pixelRatio);
        this.dust = new Dust(this.ctx, this.pixelRatio);
        this.init();
        window.requestAnimationFrame(this.animate.bind(this));
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
    }

    animate(t: number) {
        this.draw();
        this.land.draw();
        this.dust.draw();
        this.character.draw(t);
        window.requestAnimationFrame(this.animate.bind(this));
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
    y: number;
    hillLength: number;
    hillMaxHeight: number;
    defaultHeight: number;
    height: number;
    isHill: boolean;
    isUphill: boolean;
    ctx: CanvasRenderingContext2D;
    landArray: Vector[];
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
    dustLength: number;
    dustHeight: number;
    isDust: boolean;
    ctx: CanvasRenderingContext2D;
    dustArray: Vector[];
    constructor(ctx, pixelRatio) {
        this.dustArray = [];
        this.pixelRatio = pixelRatio;
        this.ctx = ctx;
    }

    draw() {
        this.dustArray.forEach((vector: Vector, index: number) => {
            if (vector.x === -1 && vector.y === -1) return;
            this.dustArray[index].x = vector.x - this.pixelRatio;
            this.ctx.fillRect(
                vector.x - this.pixelRatio,
                vector.y,
                this.pixelRatio,
                this.pixelRatio
            );
        });
        if (this.dustLength < 0 && this.isDust) {
            this.isDust = false;
            return;
        } else if (this.isDust) {
            this.dustLength -= 1;
        }
        if (this.isDust) {
            this.dustArray.push({
                x: document.body.clientWidth,
                y: this.dustHeight,
            });
        } else {
            this.dustArray.push({ x: -1, y: -1 });
            if (randomPercent(1)) {
                this.isDust = true;
                this.dustLength =
                    Math.round(
                        Math.random() * pixelConvert(3, this.pixelRatio)
                    ) + pixelConvert(1, this.pixelRatio);
                this.dustHeight =
                    100 +
                    Math.round(
                        Math.random() * pixelConvert(5, this.pixelRatio)
                    ) +
                    pixelConvert(2, this.pixelRatio);
            }
        }
    }
}

class Cloud {}

window.onload = () => {
    new App();
};
