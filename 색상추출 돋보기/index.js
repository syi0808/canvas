window.onload = () => {
    new App();
    function asd() {
        chrome.tabs.executeScript(null, {
            file: "./js/index.js",
        });
    }

    document.getElementById("asd").addEventListener("click", asd);
};

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        document.getElementById("paletteWrapper").appendChild(this.canvas);
        this.canvas.setAttribute("id", "palette");
        this.ctx = this.canvas.getContext("2d");
        this.color = "#ff0000";

        this.init();
    }

    init() {
        this.stageWidth = 300;
        this.stageHeight = 300;
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.drawPalette();
        this.gradientSlider = new GradientSlider(this.changeColor.bind(this));
    }

    drawPalette() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ctx.fillStyle = this.color;
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

    changeColor(color) {
        this.color = color;
        this.drawPalette();
    }
}

class GradientSlider {
    constructor(props) {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "gradient-slider");
        this.wrapper = document.createElement("div");
        this.wrapper.style.position = "relative";
        this.wrapper.appendChild(this.canvas);
        document.getElementById("paletteWrapper").appendChild(this.wrapper);
        this.ctx = this.canvas.getContext("2d");

        this.width = 10;
        this.radius = 12;

        this.y = 0;

        this.clicked = false;

        this.changeColor = props;

        this.init();
    }

    init() {
        this.stageWidth = 30;
        this.stageHeight = 300;
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;

        this.drawGradientSlider();
        this.createMovePoint();

        this.wrapper.addEventListener("mousedown", (e) => {
            this.clicked = true;
            this.move(e);
        });
        window.addEventListener("mouseup", () => {
            this.clicked = false;
        });
        window.addEventListener("mousemove", this.move.bind(this));
    }

    move(e) {
        if (!this.clicked) return;
        this.y = e.clientY - getDisTop(this.wrapper) - this.radius;
        if (this.y + this.radius < 0 || this.y + this.radius > this.stageHeight)
            return;
        // const [r, g, b] = this.ctx.getImageData(
        //     (this.stageWidth - this.width) / 2,
        //     this.y + this.radius,
        //     1,
        //     1
        // ).data;
        const [r, g, b] = spectrumPercentToRgb(
            (this.y + this.radius) / this.stageHeight
        );
        this.changeColor(rgbToHex(r, g, b));
        this.drawMovePoint(rgbToHex(r, g, b));
    }

    createMovePoint() {
        this.movePoint = document.createElement("div");
        this.circle = document.createElement("div");

        this.circle.appendChild(this.movePoint);

        this.wrapper.appendChild(this.circle);

        this.circle.style.position = "absolute";
        this.circle.style.display = "flex";
        this.circle.style.alignItems = "center";
        this.circle.style.justifyContent = "center";
        this.circle.style.width = `${this.radius * 2}px`;
        this.circle.style.height = `${this.radius * 2}px`;
        this.circle.style.borderRadius = "50%";
        this.circle.style.right = "3px";
        this.circle.style.top = 0;
        this.circle.style.cursor = "pointer";
        this.circle.style.background = "white";
        this.circle.style.transform = `translateY(${-this.radius}px)`;
        this.movePoint.style.background = "red";
        this.movePoint.style.width = `${this.radius}px`;
        this.movePoint.style.height = `${this.radius}px`;
        this.movePoint.style.borderRadius = "50%";
    }

    drawMovePoint(color) {
        this.circle.style.transform = `translateY(${this.y}px)`;
        this.movePoint.style.background = color || "white";
    }

    drawGradientSlider() {
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
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
        this.ctx.fillRect(
            (this.stageWidth - this.width) / 2,
            0,
            this.width,
            this.stageHeight
        );
    }
}

// class Util {
//     static rgbToHex(r, g, b) {
//         const red =
//             r.toString(16).length <= 1 ? "0" + r.toString(16) : r.toString(16);
//         const green =
//             g.toString(16).length <= 1 ? "0" + g.toString(16) : g.toString(16);
//         const blue =
//             b.toString(16).length <= 1 ? "0" + b.toString(16) : b.toString(16);

//         return "#" + red + green + blue;
//     }

//     static getDisTop(target) {
//         return target.getBoundingClientRect().top;
//     }

//     static percentToColor() {

//     }
// }

function rgbToHex(r, g, b) {
    const red =
        r.toString(16).length <= 1 ? "0" + r.toString(16) : r.toString(16);
    const green =
        g.toString(16).length <= 1 ? "0" + g.toString(16) : g.toString(16);
    const blue =
        b.toString(16).length <= 1 ? "0" + b.toString(16) : b.toString(16);

    return "#" + red + green + blue;
}

function getDisTop(target) {
    return target.getBoundingClientRect().top;
}

function hslToRgb(h, s, l) {
    let r, g, b;

    if (s == 0) {
        r = g = b = l;
    } else {
        const hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function spectrumPercentToRgb(percent) {
    return hslToRgb(1 - percent, 1, 0.5);
}
