/// <reference path="./p5/svg.d.ts" />

let font;

// TODO - Eventually we should use opentype.js to load the font and get the path data
// opentype.load('your-font.ttf', function(err, font) {
//   var path = font.getPath('Hello, world!', x, y, fontSize);
//   var svgPathData = path.toSVG();
//   // You can now insert svgPathData into your SVG output
// });

function setup() {
  createCanvas(400, 400, "svg");
  noLoop();
  addDownloadButton();

  font = loadFont("./assets/apple_casual.ttf");
}

function draw() {
  background(220);
  noStroke();
  const s = 100;

  textFont(font);
  textSize(s);
  text("Hello, world!", 0, s);
}

//

function addDownloadButton() {
  createButton("Download SVG").mousePressed(() => {
    save("sketch.svg");
  });
}
