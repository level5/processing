export const skip = false;

export default function(sketch) {

  function drawBody() {
    sketch.noStroke();

    sketch.fill(38, 38, 200);
    sketch.rect(20, 0, 38, 30);   // head
    sketch.rect(14, 32, 50, 50);  // body

    drawLeftArm();
    drawRightArm();

    sketch.rect(22, 84, 16, 60);  // left leg
    sketch.rect(40, 84, 16, 60);  // right leg

    sketch.fill(222, 222, 249);
    sketch.ellipse(30, 12, 12, 12); // left eye
    sketch.ellipse(47, 12, 12, 12); // right eye
  }

  function drawLeftArm() {
    sketch.translate(12, 32);
    sketch.rotate(sketch.radians(135));
    sketch.rect(-12, 0, 12, 37);
    sketch.resetMatrix();
  }


  function drawRightArm() {
    sketch.translate(66, 32);
    sketch.rotate(sketch.radians(-45));
    sketch.rect(0, 0, 12, 37);
    sketch.resetMatrix();
  }


  sketch.setup = function() {
    sketch.createCanvas(200, 200);
    drawBody();
  };

  sketch.draw = function() {};
}
