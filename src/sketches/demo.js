export default function(sketch) {

  function Walker () {
    this.x = sketch.width/2;
    this.y = sketch.height/2;

    this.display = function() {
      sketch.stroke(0);
      sketch.point(this.x, this.y);
    };

    this.step = function() {
      let choice = Math.floor(Math.random() * 4);
      if (choice == 0) {
        this.x += 1;
      } else if (choice == 1) {
        this.x -= 1;
      } else if (choice == 2) {
        this.y += 1;
      } else {
        this.y -= 1;
      }
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
