import Character from "./Character.js";
function randomPercent(percent) {
    return Math.ceil(Math.random() * (100 / percent)) === 1;
}
function randomLength(max, min, pixelRatio) {
    const pixelMax = max * pixelRatio;
    const pixelMin = min * pixelRatio;
    const randomMax = pixelMax - pixelMin;
    return Math.round(Math.random() * randomMax) + pixelMin;
}
function pixelConvert(number, pixelRatio) {
    return number * pixelRatio;
}
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
    animate(t) {
        this.draw();
        this.land.draw();
        this.dust.draw();
        this.character.draw(t);
        window.requestAnimationFrame(this.animate.bind(this));
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
        this.hillLength = 0;
        this.landArray = [];
        this.defaultHeight = 100;
        this.height = this.defaultHeight;
        this.speed = 2;
    }
    draw() {
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
    constructor(ctx, pixelRatio) {
        this.dustArray = [];
        this.pixelRatio = pixelRatio;
        this.ctx = ctx;
    }
    draw() {
        this.dustArray.forEach((vector, index) => {
            this.ctx.fillStyle = "black";
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
//# sourceMappingURL=index.js.map
