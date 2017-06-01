export const skip = false;

export default function(sketch) {

  function Walker () {
    this.x = sketch.width/2;
    this.y = sketch.height/2;

    this.display = function() {
      sketch.stroke(0);
      sketch.point(this.x, this.y);
    };

    this.step = function() {
      let stepx = Math.floor(Math.random() * 3) - 1;
      let stepy = Math.floor(Math.random() * 3) - 1;
      this.x += stepx;
      this.y += stepy;
    };
  }

  let w;

  sketch.setup = function() {
    sketch.createCanvas(640, 360);
    w = new Walker();
    sketch.background(255);
  };

  sketch.draw = function() {
    w.step();
    w.display();
  };

}
