// import Entity from "./Entity";
// import Vector from "./Vector";
// import Time from "./Time";
// import EntityManager from "./EntityManager";

// const PI2 = Math.PI * 2;

// const createRandomColor = () => {
//   const r = Math.round(Math.random() * 120) + 120;
//   const g = Math.round(Math.random() * 120) + 120;
//   const b = Math.round(Math.random() * 120) + 120;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// function parabola(u) {
//   return -(u - 3.2) * -(u - 3.2) + 10;
// }

// export default class Firework extends Entity {
//   constructor(props) {
//     super(props.position);

//     this.angle = -Math.PI * 0.5;
//     this.speed = Math.random() * 15 + 15;
//     this.radius = Math.random() + 1;
//     this.velocity = Math.random() * 15 + 5;
//     this.color = createRandomColor();
//     this.gravity = 0;
//   }

//   createFireworks(speed, size = 50) {
//     const angle = PI2 / size;
//     const velocity = 10;
//     const color = this.color;

//     for (let i = 0; i < size; i++) {
//       const firework = new Firework({
//         position: new Vector(this.position.x, this.position.y),
//       });

//       firework.angle = angle * i;
//       firework.isBurst = true;
//       firework.speed = speed;
//       firework.velocity = velocity;
//       firework.color = color;
//       firework.radius = this.radius;

//       EntityManager.addEntity(firework);
//     }
//   }

//   async update() {
//     const speedVelocity = this.speed * this.velocity * Time.delta;
//     this.position.x += Math.cos(this.angle) * speedVelocity;
//     this.position.y += Math.sin(this.angle) * speedVelocity;
//     this.velocity *= 0.98;

//     if (!this.isBurst && this.velocity <= 1) {
//       this.isBurst = true;
//       this.createFireworks(16, 30);
//       await sleep(150);
//       this.createFireworks(12, 20);
//       await sleep(150);
//       this.createFireworks(10, 10);
//     } else if (this.isBurst) {
//       this.gravity += 0.3;
//       this.position.y += this.speed * Time.delta + 0.98;
//       this.position.y += parabola(this.gravity);

//       if (this.velocity <= 1) {
//         EntityManager.removeEntity(this);
//       }
//     }
//   }

//   render(context) {
//     context.beginPath();
//     context.fillStyle = this.color;
//     context.arc(this.position.x, this.position.y, this.radius, 0, PI2);
//     context.fill();
//   }
// }
import Entity from "./Entity";
import Vector from "./Vector";
import Time from "./Time";
import EntityManager from "./EntityManager";

const PI2 = Math.PI * 2;

const createRandomColor = () => {
  const r = Math.round(Math.random() * 120) + 120;
  const g = Math.round(Math.random() * 120) + 120;
  const b = Math.round(Math.random() * 120) + 120;
  return `rgb(${r}, ${g}, ${b})`;
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function parabola(u) {
  return (1 / 20) * (u * u) - 1.5;
}

export default class Firework extends Entity {
  constructor(props) {
    super(props.position);

    this.angle = -Math.PI * 0.5;
    this.speed = Math.random() * 15 + 20;
    this.radius = Math.random() + 1;
    this.velocity = Math.random() * 15 + 10;
    this.color = createRandomColor();
    this.gravity = 0;
    this.gravityVelocity = 1;
  }

  createFireworks(speed, size = 50) {
    const angle = PI2 / size;
    const velocity = 10;
    const color = this.color;

    for (let i = 0; i < size; i++) {
      const firework = new Firework({
        position: new Vector(this.position.x, this.position.y),
      });

      firework.angle = angle * i;
      firework.isBurst = true;
      firework.speed = speed;
      firework.velocity = velocity;
      firework.color = color;
      firework.radius = this.radius;

      EntityManager.addEntity(firework);
    }
  }

  async update() {
    const speedVelocity = this.speed * this.velocity * Time.delta;
    this.position.x += Math.cos(this.angle) * speedVelocity;
    this.position.y += Math.sin(this.angle) * speedVelocity;
    if (this.isBurst) {
      this.velocity *= 0.99;
    } else {
      this.velocity *= 0.98;
    }

    if (!this.isBurst && this.velocity <= 1) {
      this.isBurst = true;
      this.createFireworks(14, 30);
      await sleep(150);
      this.createFireworks(12, 20);
      await sleep(150);
      this.createFireworks(10, 10);
    } else if (this.isBurst) {
      this.gravity += 0.1;
      this.position.y += this.speed * Time.delta + parabola(this.gravity);

      if (this.velocity <= 3.5) {
        EntityManager.removeEntity(this);
      }
    }
  }

  render(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.position.x, this.position.y, this.radius, 0, PI2);
    context.fill();
  }
}
