class Character {
    constructor(ctx, pixelRatio, x, y) {
        this.pixelRatio = pixelRatio;
        this.ctx = ctx;
        this.velocity = 6;
        this.gravity = 0.5;
        this.isJumping = false;
        this.x = x;
        this.y = y;
        this.defaultY = y;
        this.sceneNumber = 1;
        this.fps = 10;
        this.fpsTime = 1000 / 10;
        this.jumpMax = 40;
        window.onkeydown = (e) => {
            if (e.keyCode === 32 && !this.isJumping) {
                this.isJumpKeyDown = true;
                this.isJumpKey = true;
                this.velocity = 6;
                this.sceneNumber = 1;
            }
        };
        window.onkeyup = (e) => {
            if (e.keyCode === 32) this.isJumpKeyDown = false;
        };
    }
    jump() {
        if (!this.isJumpKey) return;
        this.y -= this.velocity;
        if (!this.isJumpKeyDown) this.velocity -= this.gravity;
        this.isJumping = true;
        if (this.y <= this.defaultY - this.jumpMax && this.isJumpKeyDown)
            this.isJumpKeyDown = false;
        if (this.y >= this.defaultY) {
            this.isJumpKey = false;
            this.isJumping = false;
            this.y = this.defaultY;
        }
    }
    draw(t) {
        if (!this.time) this.time = t;
        this.jump();
        const x = this.x;
        const y = this.y;
        const ctx = this.ctx;
        const now = t - this.time;
        ctx.fillStyle = "black";
        switch (this.sceneNumber) {
            case 1:
                this.pause(x, y);
                break;
            case 2:
                this.scene1(x, y);
                break;
            case 3:
                this.scene2(x, y);
                break;
        }
        if (now > this.fpsTime && !this.isJumpKey) {
            this.time = t;
            this.sceneNumber += 1;
            if (this.sceneNumber > 3) this.sceneNumber = 2;
        }
    }
    pause(x, y) {
        const ctx = this.ctx;
        const pr = this.pixelRatio;
        // Line One
        ctx.fillRect(x + pr * 6, y + pr * 22, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 22, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 22, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 22, pr, pr);
        // Line Two
        ctx.fillRect(x + pr * 6, y + pr * 21, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 21, pr, pr);
        // Line Three
        ctx.fillRect(x + pr * 6, y + pr * 20, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 20, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 20, pr, pr);
        // Line Four
        ctx.fillRect(x + pr * 6, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 19, pr, pr);
        // Line Five
        ctx.fillRect(x + pr * 6, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 18, pr, pr);
        // Line Six
        ctx.fillRect(x + pr * 4, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 17, pr, pr);
        // Line Seven
        ctx.fillRect(x + pr * 3, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 16, pr, pr);
        // Line Eight
        ctx.fillRect(x + pr * 2, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 15, pr, pr);
        // Line Nine
        ctx.fillRect(x + pr * 1, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 14, pr, pr);
        // Line Ten
        ctx.fillRect(x + pr * 1, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 13, pr, pr);
        // Line Eleven
        ctx.fillRect(x + pr * 1, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 12, pr, pr);
        // Line Twelve
        ctx.fillRect(x + pr * 1, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 11, pr, pr);
        // Line Thirteen
        ctx.fillRect(x + pr * 1, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 10, pr, pr);
        // Line Fourteen
        ctx.fillRect(x + pr * 1, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 9, pr, pr);
        // Line Fifteen
        ctx.fillRect(x + pr * 9, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 8, pr, pr);
        // Line Sixteen
        ctx.fillRect(x + pr * 9, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 7, pr, pr);
        // Line Seventeen
        ctx.fillRect(x + pr * 9, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 6, pr, pr);
        // Line Eighteen
        ctx.fillRect(x + pr * 9, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 5, pr, pr);
        // Line Nineteen
        ctx.fillRect(x + pr * 9, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 4, pr, pr);
        // Line Twenty
        ctx.fillRect(x + pr * 9, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 3, pr, pr);
        // Line TwentyOne
        ctx.fillRect(x + pr * 10, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 2, pr, pr);
    }
    scene1(x, y) {
        const ctx = this.ctx;
        const pr = this.pixelRatio;
        // Line One
        ctx.fillRect(x + pr * 6, y + pr * 22, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 22, pr, pr);
        // Line Two
        ctx.fillRect(x + pr * 6, y + pr * 21, pr, pr);
        // Line Three
        ctx.fillRect(x + pr * 6, y + pr * 20, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 20, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 20, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 20, pr, pr);
        // Line Four
        ctx.fillRect(x + pr * 6, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 19, pr, pr);
        // Line Five
        ctx.fillRect(x + pr * 6, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 18, pr, pr);
        // Line Six
        ctx.fillRect(x + pr * 4, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 17, pr, pr);
        // Line Seven
        ctx.fillRect(x + pr * 3, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 16, pr, pr);
        // Line Eight
        ctx.fillRect(x + pr * 2, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 15, pr, pr);
        // Line Nine
        ctx.fillRect(x + pr * 1, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 14, pr, pr);
        // Line Ten
        ctx.fillRect(x + pr * 1, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 13, pr, pr);
        // Line Eleven
        ctx.fillRect(x + pr * 1, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 12, pr, pr);
        // Line Twelve
        ctx.fillRect(x + pr * 1, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 11, pr, pr);
        // Line Thirteen
        ctx.fillRect(x + pr * 1, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 10, pr, pr);
        // Line Fourteen
        ctx.fillRect(x + pr * 1, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 9, pr, pr);
        // Line Fifteen
        ctx.fillRect(x + pr * 9, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 8, pr, pr);
        // Line Sixteen
        ctx.fillRect(x + pr * 9, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 7, pr, pr);
        // Line Seventeen
        ctx.fillRect(x + pr * 9, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 6, pr, pr);
        // Line Eighteen
        ctx.fillRect(x + pr * 9, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 5, pr, pr);
        // Line Nineteen
        ctx.fillRect(x + pr * 9, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 4, pr, pr);
        // Line Twenty
        ctx.fillRect(x + pr * 9, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 3, pr, pr);
        // Line TwentyOne
        ctx.fillRect(x + pr * 10, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 2, pr, pr);
    }
    scene2(x, y) {
        const ctx = this.ctx;
        const pr = this.pixelRatio;
        // Line One
        ctx.fillRect(x + pr * 11, y + pr * 22, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 22, pr, pr);
        // Line Two
        ctx.fillRect(x + pr * 11, y + pr * 21, pr, pr);
        // Line Three
        ctx.fillRect(x + pr * 6, y + pr * 20, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 20, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 20, pr, pr);
        // Line Four
        ctx.fillRect(x + pr * 6, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 19, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 19, pr, pr);
        // Line Five
        ctx.fillRect(x + pr * 6, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 18, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 18, pr, pr);
        // Line Six
        ctx.fillRect(x + pr * 4, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 17, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 17, pr, pr);
        // Line Seven
        ctx.fillRect(x + pr * 3, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 16, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 16, pr, pr);
        // Line Eight
        ctx.fillRect(x + pr * 2, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 15, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 15, pr, pr);
        // Line Nine
        ctx.fillRect(x + pr * 1, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 14, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 14, pr, pr);
        // Line Ten
        ctx.fillRect(x + pr * 1, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 4, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 5, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 13, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 13, pr, pr);
        // Line Eleven
        ctx.fillRect(x + pr * 1, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 3, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 6, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 12, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 12, pr, pr);
        // Line Twelve
        ctx.fillRect(x + pr * 1, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 2, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 7, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 11, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 11, pr, pr);
        // Line Thirteen
        ctx.fillRect(x + pr * 1, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 8, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 10, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 10, pr, pr);
        // Line Fourteen
        ctx.fillRect(x + pr * 1, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 9, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 9, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 9, pr, pr);
        // Line Fifteen
        ctx.fillRect(x + pr * 9, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 8, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 8, pr, pr);
        // Line Sixteen
        ctx.fillRect(x + pr * 9, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 7, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 7, pr, pr);
        // Line Seventeen
        ctx.fillRect(x + pr * 9, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 6, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 6, pr, pr);
        // Line Eighteen
        ctx.fillRect(x + pr * 9, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 5, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 5, pr, pr);
        // Line Nineteen
        ctx.fillRect(x + pr * 9, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 4, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 4, pr, pr);
        // Line Twenty
        ctx.fillRect(x + pr * 9, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 10, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 3, pr, pr);
        ctx.fillRect(x + pr * 18, y + pr * 3, pr, pr);
        // Line TwentyOne
        ctx.fillRect(x + pr * 10, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 12, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 13, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 14, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 11, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 15, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 16, y + pr * 2, pr, pr);
        ctx.fillRect(x + pr * 17, y + pr * 2, pr, pr);
    }
}
export default Character;
//# sourceMappingURL=Character.js.map
