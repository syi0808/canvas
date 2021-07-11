window.onload = () => {
    new App();
    function asd() {
        chrome.tabs.executeScript(null, {
            file: "./js/index.js",
        });
        localStorage.setItem("qwer", JSON.stringify(["asd", "qwe"]));
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

        this.hue = 0;

        this.isClick = false;

        this.rgb = [255, 0, 0];

        this.rdom = document.getElementById("r");
        this.gdom = document.getElementById("g");
        this.bdom = document.getElementById("b");
        this.hexdom = document.getElementById("hex");

        this.x = 300;
        this.y = 0;

        this.init();
    }

    changeValue(value, order) {
        switch (order) {
            case 1:
                this.rgb = [value, this.rgb[1], this.rgb[2]];
                break;
            case 2:
                this.rgb = [this.rgb[0], value, this.rgb[2]];
                break;
            case 3:
                this.rgb = [this.rgb[0], this.rgb[1], value];
                break;
        }
        const [r, g, b] = this.rgb;
        this.changeRgb(r, g, b);
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
            changeRgb: this.changeRgbDom.bind(this),
        });

        this.wrapper.addEventListener("mousedown", () => {
            this.isClick = true;
        });
        window.addEventListener("mousemove", this.move.bind(this));
        window.addEventListener("mouseup", () => {
            this.isClick = false;
        });
        const eventCallback = () => {
            const r = this.rdom.value;
            const g = this.gdom.value;
            const b = this.bdom.value;
            this.changeRgb(r, g, b);
        };
        this.rdom.addEventListener("input", () => {
            eventCallback();
            this.rrange.move(this.rdom.value);
        });
        this.gdom.addEventListener("input", () => {
            eventCallback();
            this.changeValue(this.gdom.value, 2);
        });
        this.bdom.addEventListener("input", () => {
            eventCallback();
            this.changeValue(this.bdom.value, 3);
        });
        this.hexdom.innerText = rgbToHex(255, 0, 0);
        this.createMovePoint();

        this.rrange = new CircleRange({
            color: "#ff0000",
            changeValue: this.changeValue.bind(this),
            order: 1,
            angle: 255,
        });
        this.grange = new CircleRange({
            color: "#00ff00",
            changeValue: this.changeValue.bind(this),
            order: 2,
            angle: 0,
        });
        this.brange = new CircleRange({
            color: "#0000ff",
            changeValue: this.changeValue.bind(this),
            order: 3,
            angle: 0,
        });
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
        this.movePoint.style.width = `${this.radius * 2 - 4}px`;
        this.movePoint.style.height = `${this.radius * 2 - 4}px`;
        this.movePoint.style.borderRadius = "50%";
    }

    drawMovePoint() {
        this.rgb = locationToRgb(this.hue / 360, this.x, this.y);
        this.circle.style.transform = `translate(${
            this.x - 300 + this.radius
        }px, ${this.y - this.radius}px)`;
        this.movePoint.style.background =
            `rgb(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]})` || "white";
        this.changeRgbDom();
    }

    changeColor(color) {
        this.color = color;
        this.drawPalette();
    }

    changeHue(hue) {
        this.hue = hue;
        this.drawMovePoint();
    }

    changeRgb(r, g, b) {
        this.rgb = [r, g, b];
        let [x, y, hue] = rgbToPos(r, g, b);
        if (hue === 1) hue = 0;
        this.hue = hue * 360;
        this.gradientSlider.y = hue * 300 - this.radius;
        this.gradientSlider.move();
        this.x = x;
        this.y = y;
        this.drawMovePoint();
    }

    changeRgbDom() {
        this.rdom.value = this.rgb[0];
        this.gdom.value = this.rgb[1];
        this.bdom.value = this.rgb[2];
        this.hexdom.innerText = rgbToHex(this.rgb[0], this.rgb[1], this.rgb[2]);
    }
}

class GradientSlider {
    constructor({ changeColor, changeHue, changeRgb }) {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "gradient-slider");
        this.wrapper = document.createElement("div");
        this.wrapper.style.position = "relative";
        this.wrapper.style.marginLeft = "20px";
        this.wrapper.appendChild(this.canvas);
        document.getElementById("paletteWrapper").appendChild(this.wrapper);
        this.ctx = this.canvas.getContext("2d");
        this.movePoint = document.createElement("div");
        this.circle = document.createElement("div");

        this.width = 10;
        this.radius = 12;

        this.y = 0;

        this.clicked = false;

        this.changeColor = changeColor;
        this.changeHue = changeHue;
        this.changeRgb = changeRgb;

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
        if (!this.clicked && e) return;
        if (e) this.y = e.clientY - getDisTop(this.wrapper) - this.radius;
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
        this.changeRgb();
    }

    createMovePoint() {
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
        this.movePoint.style.width = `${this.radius + 2}px`;
        this.movePoint.style.height = `${this.radius + 2}px`;
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

class CircleRange {
    constructor({ color, changeValue, order, angle }) {
        this.prevAngle = null;
        this.radius = 5;
        this.centerX = 50;
        this.centerY = 50;
        this.color = color;
        this.flag = false;
        this.order = order;

        this.changeValue = changeValue;

        this.value = 0;

        this.isClick = false;

        this.canvas = document.createElement("canvas");
        this.canvas.width = 100;
        this.canvas.height = 100;
        this.ctx = this.canvas.getContext("2d");
        document.getElementById(`w${order}`).appendChild(this.canvas);

        this.wrapper = document.createElement("div");
        this.wrapper.style.width = "100px";
        this.wrapper.style.height = "100px";
        this.wrapper.style.position = "relative";
        this.wrapper.style.border = "1px solid white";
        this.wrapper.style.borderRadius = "50%";

        this.movePoint = document.createElement("div");
        this.movePoint.style.width = "10px";
        this.movePoint.style.height = "10px";
        this.movePoint.style.background = "white";
        this.movePoint.style.transform = `translate(20px, 90px)`;

        this.wrapper.appendChild(this.movePoint);

        this.init();
        this.move(angle);
    }

    init() {
        this.canvas.addEventListener("mousedown", (e) => {
            this.isClick = true;
            this.move(e);
        });
        window.addEventListener("mouseup", () => {
            this.isClick = false;
        });
        window.addEventListener("mousemove", this.move.bind(this));
        this.movePoint.style.position = "absolute";

        this.draw();
    }

    move(e) {
        let angle;
        if (isNaN(e)) {
            if (this.circleClick(e)) this.canvas.style.cursor = "pointer";
            else this.canvas.style.cursor = "default";
            if (!this.isClick) return;
            const x = e.clientX - getDisLeft(this.canvas) - 5;
            const y = e.clientY - getDisTop(this.canvas) - 5;
            const deltaX = this.centerX - x;
            const deltaY = this.centerY - y;
            angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 90;
        } else {
            angle = Math.floor((e / 255) * 270);
            if (e > 225) angle = angle - 225 - 270;
            else angle -= 135;
        }
        if (angle < -136 && angle > -180) {
            angle = -135;
            this.flag = true;
        } else if (angle > -224 && angle <= -180) {
            angle = -225;
            this.flag = true;
        } else this.flag = false;
        this.x = 45 * Math.sin((angle * Math.PI) / 180) + 45 + this.radius;
        this.y = 45 * -Math.cos((angle * Math.PI) / 180) + 50 + this.radius;

        this.draw(angle);

        if (Math.abs(angle) > 200) angle = 270 - (-angle - 225);
        else angle += 135;

        this.changeValue(Math.ceil(255 * (angle / 270)), this.order);
    }

    draw(angle) {
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, 100, 100);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 10;
        this.ctx.lineCap = "round";
        this.ctx.arc(
            this.centerX,
            this.centerY + 5,
            45,
            ((-135 - 90) * Math.PI) / 180,
            ((angle - 90) * Math.PI) / 180
        );
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.fillStyle = "white";
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    circleClick(e) {
        const distance = Math.sqrt(
            Math.pow(e.offsetX - this.x, 2) + Math.pow(e.offsetY - this.y, 2)
        );
        return distance < this.radius;
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
        h = s = 0;
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
    const lightness = (hsv_value / 2 || 0) * (2 - hsv_saturation || 0);
    const saturation =
        (hsv_value * hsv_saturation) / (1 - Math.abs(2 * lightness - 1)) || 0;
    return hslToRgb(h, saturation, lightness);
}

function hslToHsv(h, s, l, v = s * Math.min(l, 1 - l) + l) {
    return [h, v ? 2 - (2 * l) / v : 0, v];
}

function rgbToPos(r, g, b) {
    const [h, s, l] = rgbToHsl(r, g, b);
    const hsv = hslToHsv(h, s, l);
    return [hsv[1] * 300, 300 * (1 - hsv[2]), 1 - h];
}
