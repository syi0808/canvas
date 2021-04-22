class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.canvas.setAttribute("id", "palette");
        this.ctx = this.canvas.getContext("2d");

        this.init();
    }

    init() {
        this.stageWidth = 300;
        this.stageHeight = 300;
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.createPalette();
        this.gradientSlider = new GradientSlider();
    }

    createPalette() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

        const whiteGradient = this.ctx.createLinearGradient(
            0,
            0,
            this.canvas.width,
            0
        );
        whiteGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        whiteGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        this.ctx.fillStyle = whiteGradient;
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

        const blackGradient = this.ctx.createLinearGradient(
            0,
            0,
            0,
            this.stageHeight
        );
        blackGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        blackGradient.addColorStop(1, "rgba(0, 0, 0, 1)");
        this.ctx.fillStyle = blackGradient;
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    }
}

class GradientSlider {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "gradient-slider");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");

        this.init();
    }

    init() {
        this.stageWidth = 20;
        this.stageHeight = 300;
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.createGradientSlider();
    }

    createGradientSlider() {
        const gradient = this.ctx.createLinearGradient(
            0,
            0,
            0,
            this.stageHeight
        );
        gradient.addColorStop(0.0, "hsl(0, 100%, 50%)");
        gradient.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
        gradient.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
        gradient.addColorStop(0.5, "hsl(180, 100%, 50%)");
        gradient.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
        gradient.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
        gradient.addColorStop(1.0, "hsl(360, 100%, 50%)");
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
    }
}

window.onload = () => {
    new App();
};

chrome.runtime.sendMessage({ msg: "capture" }, function (response) {
    console.log(response.imgSrc);
    const temp = document.createElement("img");
    temp.src = response.imgSrc;
    temp.style.position = "absolute";
    temp.style.top = "0";
    temp.style.left = "0";
    temp.style.width = "100%";
    temp.style.height = "100%";
    document.body.appendChild(temp);
});

function rgbToHex(r, g, b) {
    const red =
        r.toString(16).length <= 1 ? "0" + r.toString(16) : r.toString(16);
    const green =
        g.toString(16).length <= 1 ? "0" + g.toString(16) : g.toString(16);
    const blue =
        b.toString(16).length <= 1 ? "0" + b.toString(16) : b.toString(16);

    return red + green + blue;
}
