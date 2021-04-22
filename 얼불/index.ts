import * as PIXI from "pixi.js";
const app = new PIXI.Application();

document.body.appendChild(app.view);

const starTexture = PIXI.Texture.from("assets/star.png");

const starAmount = 1000;
let cameraZ = 0;
const fov = 20;
const baseSpeed = 0.025;
let speed = 0;
let warpSpeed = 0;
const starStretch = 5;
const starBaseSize = 0.05;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

// Create the stars
const stars = [];
for (let i = 0; i < starAmount; i++) {
    const star = {
        sprite: new PIXI.Sprite(starTexture),
        z: 0,
        x: 0,
        y: 0,
        random: getRandomInt(100, 150),
        scal: getRandomInt(0, 1000),
    };
    star.sprite.anchor.x = 0.5;
    star.sprite.anchor.y = 0.7;
    randomizeStar(star, true);
    app.stage.addChild(star.sprite);
    stars.push(star);
}

function randomizeStar(star, initial?) {
    star.z = initial
        ? Math.random() * 2000
        : cameraZ + Math.random() * 1000 + 2000;

    // Calculate star positions with radial random coordinate so no star hits the camera.
    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;
    star.x = Math.cos(deg) * distance;
    star.y = Math.sin(deg) * distance;
}

// Change flight speed every 5 seconds
setInterval(() => {
    warpSpeed = warpSpeed > 0 ? 0 : 1;
}, 5000);

// Listen for animate update
app.ticker.add((delta) => {
    for (let i = 0; i < starAmount; i++) {
        const star = stars[i];
        star.scal += delta;
        star.sprite.scale.x = 0.1;
        star.sprite.scale.y = 0.1;
        star.sprite.x = Math.cos(star.scal / 50) * star.random + 200;
        star.sprite.y = Math.sin(star.scal / 50) * star.random + 200;
    }
});
