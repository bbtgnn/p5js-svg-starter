/** @type {SVGImage} */
let svg;

/** @type {Font} */
let font;

function preload() {
  svg = loadSVG("./assets/test.svg");
  font = loadFont("./fonts/Adobe-Jenson-Pro-Bold-Caption.ttf");
}

function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  noLoop(); // Opzionale

  // fillSVG(svg, "red");
  fill("pink");
  image(svg, 0, 0, 400, 400);

  noStroke();
  textFont(font);
  textSize(100);
  textSVG("Hello", 100, 100);

  //   fillSVG(svg, "blue");
  //   image(svg, 100, 0, 400, 400);

  //   noFillSVG(svg);
  //   strokeSVG(svg, "green");
  //   strokeWeightSVG(svg, 1);
  //   image(svg, 300, 0, 400, 400);

  //   //

  //   const paths = getSVGPaths(svg);
  //   paths.forEach((p) => {
  //     if (random(1) < 0.5) {
  //       hideSVG(p);
  //     } else {
  //       showSVG(p);
  //     }
  //   });
  //   fillSVG(svg, "pink");
  //   noStrokeSVG(svg);
  //   image(svg, 0, 0, 400, 400);

  //   fillSVG(svg, "yellow");
  //   image(svg, 100, 0, 400, 400);

  //   resetSVG(svg);
  //   image(svg, 200, 0, 400, 400);
}
