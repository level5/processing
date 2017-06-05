import p5 from 'p5';

export const skip = true;

export default function(sketch) {

  class Ball {

    constructor() {
      // 边界条件的检查还是有点问题,会导致卡在边界
      this.location = sketch.createVector(Math.random() * 150 + 16, Math.random() * 150 + 16);
      this.velocity = sketch.createVector(2.5, 5);
      this.acceleration = sketch.createVector(0.001, 0.001);
    }

    update() {

      let mouse = sketch.createVector(sketch.mouseX, sketch.mouseY);
      let dir = p5.Vector.sub(mouse, this.location);

      dir.normalize();
      dir.mult(0.05);

      this.acceleration = dir;

      this.velocity.add(this.acceleration);
      this.velocity.limit(10);
      this.location.add(this.velocity);
    }

    checkEdgs() {
      if (this.location.x + 16 > sketch.width || this.location.x - 16 < 0) {
        this.velocity.x = this.velocity.x * -1;
      }

      if (this.location.y + 16 > sketch.height || this.location.y - 16 < 0) {
        this.velocity.y = this.velocity.y * -1;
      }
    }

    display() {
      // console.log(this.location.x, this.location.y, this.velocity.x, this.velocity.y)
      sketch.stroke(0);
      sketch.fill(175);
      sketch.ellipse(this.location.x, this.location.y, 16, 16);
    }


  }

  let ball;

  sketch.setup = function() {
    sketch.createCanvas(200, 200);
    sketch.smooth();
    ball = new Ball();
  };

  sketch.draw = function() {
    sketch.background(255);

    ball.update();
    ball.checkEdgs();
    ball.display();
  };
}
