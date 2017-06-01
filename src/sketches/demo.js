export default function(sketch) {
  sketch.setup = function() {
    sketch.createCanvas(300, 300);
  };

  sketch.draw = function() {
    sketch.rect(100, 100, 50, 50);
  };
}
