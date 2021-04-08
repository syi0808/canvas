import Character from "./Character";
import Hurdle from "./Hurdle";

function randomPercent(percent: number): boolean {
    return Math.ceil(Math.random() * (100 / percent)) === 1;
}

function randomLength(max: number, min: number, pixelRatio: number): number {
    const pixelMax: number = max * pixelRatio;
    const pixelMin: number = min * pixelRatio;
    const randomMax: number = pixelMax - pixelMin;
    return Math.ceil(Math.random() * randomMax) + pixelMin;
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
    hurdle: Hurdle;
    stageWidth: number;
    stageHeight: number;
    x: number;
    pixelRatio: number;
    walkSceneNunber: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    isGameOver: boolean;
    animationFrame: ReturnType<typeof window.requestAnimationFrame>;
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.pixelRatio = 3;
        this.character = new Character(this.ctx, this.pixelRatio, 100, 30);
        this.land = new Land(this.ctx, this.pixelRatio);
        this.dust = new Dust(this.ctx, this.pixelRatio);
        this.isGameOver = false;
        this.hurdle = new Hurdle(this.ctx, this.pixelRatio);
        this.init();
        this.animationFrame = window.requestAnimationFrame(
            this.animate.bind(this)
        );
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
        if (this.hurdle.isGameOver) {
            window.cancelAnimationFrame(this.animationFrame);
            alert("게임 오버");
            return;
        }
        this.draw();
        this.dust.draw();
        this.hurdle.draw(t, this.character.x, this.character.y);
        this.land.draw();
        this.character.draw(t);
        this.animationFrame = window.requestAnimationFrame(
            this.animate.bind(this)
        );
    }
}

interface Vector {
    x: number;
    y: number;
}

interface Hill {
    length: number;
    height: number;
    x: number;
}

interface DustType {
    x: number;
    y: number;
    length: number;
}

class Land {
    pixelRatio: number;
    y: number;
    hillLength: number;
    defaultHeight: number;
    height: number;
    ctx: CanvasRenderingContext2D;
    landArray: Hill[];
    speed: number;
    constructor(ctx, pixelRatio) {
        this.pixelRatio = pixelRatio;
        this.ctx = ctx;
        this.hillLength = 0;
        this.landArray = [];
        this.defaultHeight = 100;
        this.height = this.defaultHeight;
        this.speed = 4;
    }
    draw() {
        this.speed += 0.001;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.defaultHeight - 0.5);
        this.ctx.lineTo(document.body.clientWidth, this.defaultHeight - 0.5);
        this.ctx.lineWidth = this.pixelRatio;
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.landArray.forEach((hill, index) => {
            if (hill.x < 0) {
                this.landArray.shift();
                return;
            }
            this.landArray[index].x = hill.x - this.speed;
            const forLength =
                hill.length + (this.defaultHeight - hill.height) * 2;
            for (let i = 0; i <= forLength; i++) {
                this.ctx.fillStyle = "black";
                let y = this.defaultHeight - this.pixelRatio;
                if (i <= this.defaultHeight - hill.height) y -= i;
                else if (i <= this.defaultHeight - hill.height + hill.length)
                    y = hill.height - this.pixelRatio;
                else y -= forLength - i;
                this.ctx.fillRect(
                    hill.x + i * this.pixelRatio,
                    y,
                    this.pixelRatio,
                    this.pixelRatio
                );
                this.ctx.fillStyle = "white";
                for (let j = 0; j < hill.height - (hill.height - i) + 1; j++) {
                    this.ctx.fillRect(
                        hill.x + i * this.pixelRatio,
                        y + j + this.pixelRatio,
                        this.pixelRatio,
                        this.pixelRatio
                    );
                }
            }
        });
        if (randomPercent(0.5)) {
            this.landArray.push({
                length: (this.hillLength = Math.round(Math.random() * 2) + 2),
                height: 95 + Math.round(Math.random() * 2 + 1),
                x: document.body.clientWidth,
            });
        }
    }
}

class Dust {
    pixelRatio: number;
    ctx: CanvasRenderingContext2D;
    dustArray: DustType[];
    speed: number;
    constructor(ctx, pixelRatio) {
        this.dustArray = [];
        this.pixelRatio = pixelRatio;
        this.ctx = ctx;
        this.speed = 4;
    }

    draw() {
        this.speed += 0.001;
        this.dustArray.forEach((vector: DustType, index: number) => {
            this.ctx.fillStyle = "black";
            if (vector.x === -1 && vector.y === -1) return;
            this.dustArray[index].x = vector.x - this.speed;
            this.ctx.fillRect(
                vector.x - this.speed,
                vector.y,
                this.pixelRatio * vector.length,
                this.pixelRatio
            );
        });
        if (randomPercent(1)) {
            this.dustArray.push({
                x: document.body.clientWidth,
                y:
                    100 +
                    Math.round(
                        Math.random() * pixelConvert(5, this.pixelRatio)
                    ) +
                    pixelConvert(2, this.pixelRatio),
                length:
                    Math.round(
                        Math.random() * pixelConvert(3, this.pixelRatio)
                    ) + pixelConvert(1, this.pixelRatio),
            });
        }
    }
}

class Cloud {}

window.onload = () => {
    new App();
};
