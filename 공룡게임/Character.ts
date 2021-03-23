class Character {
  pixelRatio: number;
  ctx: CanvasRenderingContext2D;
  constructor(ctx, pixelRatio) {
    this.pixelRatio = pixelRatio;
    this.ctx = ctx;
  }
  draw(x: number, y: number) {
    // pixelRatio == pr
    const pr: number = this.pixelRatio;
    const ctx = this.ctx;
    ctx.fillStyle = "black";
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
}

export default Character;
