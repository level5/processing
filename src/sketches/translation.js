export const skip = true;

export default function(sketch) {

  function house(x, y) {
    sketch.stroke(1);
    sketch.fill(255);
    sketch.resetMatrix();
    sketch.translate(x, y);

    sketch.triangle(15, 0, 0, 15, 30, 15);
    sketch.rect(0, 15, 30, 30);
    sketch.rect(12, 30, 10, 15);
  }

  sketch.setup = function() {
    sketch.createCanvas(400, 400);

    sketch.background(255);
    sketch.noStroke();
    sketch.fill(192);
    sketch.rect(20, 20, 40, 40);

    // sketch.fill(255, 0, 0, 128);
    // sketch.rect(20 + 60, 20 + 80, 40, 40);

    sketch.fill(0, 0, 255, 128);
    sketch.translate(60, 80);
    sketch.rect(20, 20, 40, 40);

    for (let i = 10; i < sketch.width; i += 50) {
      house(i, 20);
    }

    // sketch.resetMatrix();
    //
    // sketch.fill(0, 0, 255, 128);
    // sketch.rect(150, 150, 40, 40);
    //
    // sketch.rotate(sketch.radians(45));
    // sketch.rect(150, 150, 40, 40);

    // 期望的方式
    sketch.resetMatrix();

    sketch.fill(0, 0, 255, 128);
    sketch.rect(150, 150, 40, 40);

    sketch.translate(150, 150);
    sketch.rotate(sketch.radians(45));
    sketch.rect(0, 0, 40, 40);
  };

  sketch.draw = function() {
    // 每次draw, translate的坐标系都会被还原
    wheel();
  };

  function wheel() {
    if (sketch.frameCount % 10 !== 0) {
      return;
    }

    sketch.noStroke();
    sketch.fill(sketch.frameCount * 3 % 255, sketch.frameCount * 5 % 255, sketch.frameCount * 7 % 255);
    sketch.resetMatrix();
    sketch.translate(sketch.mouseX, sketch.mouseY);
    sketch.rotate(sketch.radians(sketch.frameCount * 2 % 360));
    sketch.rect(0, 0, 80, 20);
  }

}
