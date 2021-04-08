class Hurdle {
    constructor(ctx, pixelRatio) {
        this.pixelRatio = pixelRatio;
        this.number = Math.round(Math.random() * 2) + 1;
        this.pixelRatio = pixelRatio;
        this.ctx = ctx;
        this.delay = 3;
        this.delayTime = 1000 * this.delay;
        this.hurdleArray = [];
        this.speed = 4;
        this.isGameOver = false;
    }
    draw(t, characterX, characterY) {
        this.speed += 0.001;
        const pr = this.pixelRatio;
        let i;
        if (!this.time)
            this.time = t;
        const now = t - this.time;
        if (now > this.delayTime) {
            this.time = t;
            this.hurdleArray.push({
                x: document.body.clientWidth,
                y: 100,
                height: Math.ceil(Math.random() * 3) + 5,
            });
        }
        this.hurdleArray.forEach((vector, index) => {
            if (vector.x <= characterX + 42 &&
                characterY >= 4 &&
                characterX <= vector.x + 42) {
                this.isGameOver = true;
                return;
            }
            if (vector.x < 0) {
                this.hurdleArray.shift();
                return;
            }
            this.hurdleArray[index].x -= this.speed;
            for (i = 0; i < vector.height; i++) {
                this.ctx.fillRect(vector.x + pr * 5, vector.y - (i + 1) * pr, pr, pr);
                this.ctx.fillRect(vector.x + pr * 6, vector.y - (i + 1) * pr, pr, pr);
                this.ctx.fillRect(vector.x + pr * 7, vector.y - (i + 1) * pr, pr, pr);
                this.ctx.fillRect(vector.x + pr * 8, vector.y - (i + 1) * pr, pr, pr);
            }
            // Line
            this.ctx.fillRect(vector.x + pr * 2, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 3, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 4, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 5, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 6, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 8, vector.y - i * pr, pr, pr);
            // Line
            this.ctx.fillRect(vector.x + pr * 1, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 2, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 3, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 4, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 5, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 6, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 8, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 9, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 10, vector.y - i * pr, pr, pr);
            // Line
            this.ctx.fillRect(vector.x + pr * 0, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 1, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 2, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 3, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 5, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 6, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 8, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 9, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 10, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 11, vector.y - i * pr, pr, pr);
            // Line
            this.ctx.fillRect(vector.x + pr * 0, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 1, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 2, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 5, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 6, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 8, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 10, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 11, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 12, vector.y - i * pr, pr, pr);
            // Line
            this.ctx.fillRect(vector.x + pr * 0, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 1, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 2, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 5, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 6, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 8, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 10, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 11, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 12, vector.y - i * pr, pr, pr);
            // Line
            this.ctx.fillRect(vector.x + pr * 0, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 1, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 2, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 5, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 6, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 8, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 10, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 11, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 12, vector.y - i * pr, pr, pr);
            // Line
            this.ctx.fillRect(vector.x + pr * 1, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 5, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 6, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 8, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 10, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 11, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 12, vector.y - i * pr, pr, pr);
            // Line
            this.ctx.fillRect(vector.x + pr * 5, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 6, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 8, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 10, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 11, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 12, vector.y - i * pr, pr, pr);
            // Line
            this.ctx.fillRect(vector.x + pr * 6, vector.y - ++i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 7, vector.y - i * pr, pr, pr);
            this.ctx.fillRect(vector.x + pr * 11, vector.y - i * pr, pr, pr);
        });
    }
}
export default Hurdle;
//# sourceMappingURL=Hurdle.js.map