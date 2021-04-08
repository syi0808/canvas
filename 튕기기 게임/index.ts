class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    stageWidth: number;
    stageHeight: number;
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.init();
    }

    init() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }
}

class Ball {}

class Bar {}

window.onload = () => {
    new App();
};
