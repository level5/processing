import p5 from 'p5';

var requireContext = require.context("./sketches", true, /\.js$/);
requireContext.keys().map(requireContext).forEach((sketch, i) => {
  if (sketch.skip) {
    console.log('render sketch', i, 'skiped');
    return;
  }
  console.log('render sketch', i);
  let div = document.createElement("div");
  div.id = 'sketch' + i;
  document.body.appendChild(div)
  let myp5 = new p5(sketch.default, 'sketch' + i);
});
