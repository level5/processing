export const skip = false;

class PVector {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(pv) {
    return new PVector(this.x + pv.x, this.y + pv.y);
  }

}


export default function(sketch) {

  class Ball {

    constructor() {
      // 边界条件的检查还是有点问题,会导致卡在边界
      this.location = new PVector(Math.random() * 150 + 16, Math.random() * 150 + 16);
      this.velocity = new PVector(2.5, 5);
    }

    update() {
      this.location = this.location.add(this.velocity);
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
