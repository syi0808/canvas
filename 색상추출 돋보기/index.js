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
        this.wrapper = document.createElement("div");
        this.wrapper.appendChild(this.canvas);
        this.wrapper.style.position = "relative";
        document.getElementById("paletteWrapper").appendChild(this.wrapper);
        this.canvas.setAttribute("id", "palette");
        this.ctx = this.canvas.getContext("2d");
        this.color = "#ff0000";

        this.radius = 12;

        this.isClick = false;

        this.hue = 0;

        this.rgb = [255, 0, 0];

        this.x = 300;
        this.y = 0;

        this.init();
    }

    init() {
        this.stageWidth = 300;
        this.stageHeight = 300;
        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.drawPalette();
        this.gradientSlider = new GradientSlider({
            changeColor: this.changeColor.bind(this),
            changeHue: this.changeHue.bind(this),
        });

        this.wrapper.addEventListener("mousedown", () => {
            this.isClick = true;
        });
        window.addEventListener("mousemove", this.move.bind(this));
        window.addEventListener("mouseup", () => {
            this.isClick = false;
        });
        this.createMovePoint();
    }

    move(e) {
        if (!this.isClick) return;
        this.x = e.clientX - getDisLeft(this.wrapper);
        this.y = e.clientY - getDisTop(this.wrapper);
        if (this.x < 0) this.x = 0;
        if (this.x > this.stageWidth) this.x = this.stageWidth;
        if (this.y < 0) this.y = 0;
        if (this.y > this.stageHeight) this.y = this.stageHeight;
        this.drawMovePoint();
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
        this.circle.style.right = 0;
        this.circle.style.top = 0;
        this.circle.style.cursor = "pointer";
        this.circle.style.background = "white";
        this.circle.style.transform = `translate(${this.radius}px, ${-this
            .radius}px)`;
        this.movePoint.style.background = "red";
        this.movePoint.style.width = `${this.radius}px`;
        this.movePoint.style.height = `${this.radius}px`;
        this.movePoint.style.borderRadius = "50%";
    }

    drawMovePoint() {
        this.rgb = locationToRgb(this.hue / 360, this.x, this.y);
        this.circle.style.transform = `translate(${
            this.x - 300 + this.radius
        }px, ${this.y - this.radius}px)`;
        this.movePoint.style.background =
            `rgb(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]})` || "white";
    }

    changeColor(color) {
        this.color = color;
        this.drawPalette();
    }

    changeHue(hue) {
        this.hue = hue;
        this.drawMovePoint();
    }
}

class GradientSlider {
    constructor({ changeColor, changeHue }) {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "gradient-slider");
        this.wrapper = document.createElement("div");
        this.wrapper.style.position = "relative";
        this.wrapper.style.marginLeft = "20px";
        this.wrapper.appendChild(this.canvas);
        document.getElementById("paletteWrapper").appendChild(this.wrapper);
        this.ctx = this.canvas.getContext("2d");

        this.width = 10;
        this.radius = 12;

        this.y = 0;

        this.clicked = false;

        this.changeColor = changeColor;
        this.changeHue = changeHue;

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
        const huePercent = (this.y + this.radius) / this.stageHeight;
        // const [r, g, b] = this.ctx.getImageData(
        //     (this.stageWidth - this.width) / 2,
        //     this.y + this.radius,
        //     1,
        //     1
        // ).data;
        const [r, g, b] = spectrumPercentToRgb(huePercent);
        this.changeHue(360 - huePercent * 360);
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

function getDisLeft(target) {
    return target.getBoundingClientRect().left;
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

function rgbToHsl(r, g, b) {
    (r /= 255), (g /= 255), (b /= 255);
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function spectrumPercentToRgb(percent) {
    return hslToRgb(1 - percent, 1, 0.5);
}

function locationToRgb(h, x, y) {
    const hsv_value = 1 - y / 300;
    const hsv_saturation = x / 300;
    const lightness = (hsv_value / 2) * (2 - hsv_saturation);
    const saturation =
        (hsv_value * hsv_saturation) / (1 - Math.abs(2 * lightness - 1));
    return hslToRgb(h, saturation, lightness);
}
