export const skip = false;

export default function(sketch) {

  let randomCounts = [];
  let len = 20;

  sketch.setup = function() {
    sketch.createCanvas(640, 240);
  };

  sketch.draw = function() {
    sketch.background(255);
    let index = Math.floor(Math.random() * len);
    randomCounts[index] = (randomCounts[index] || 0 ) + 1;

    sketch.stroke(0);
    sketch.fill(127);
    // console.log(randomCounts);
    let w = sketch.width / len;
    for (let i = 0; i < len; i++) {
      // x, y, offset-x, offset-y
      sketch.rect(i * w, sketch.height - randomCounts[i], w - 1, randomCounts[i]);
    }
  };
}
