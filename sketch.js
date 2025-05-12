/** @type {Font} */
let font;

/** @type {Graphics} */
let graphics;

function preload() {
  font = loadFont("./fonts/Adobe-Jenson-Pro-Bold-Caption.ttf");
}

function setup() {
  createCanvas(400, 400, "svg");
  graphics = createGraphics(200, 200, "svg");
  noLoop();
  addDownloadButton();
}

function draw() {
  background(220);
  noStroke();
  fill(0);

  // Center the text
  const t = "ciao";
  const fontSize = 72;
  const textW = textWidth(t);
  const x = (width - textW) / 2;
  const y = height / 2;

  textSVG(font, t, x, y, fontSize);

  textSVG(font, t, 100, 100, fontSize, graphics);
  image(graphics, 0, 0);
}

//

function addDownloadButton() {
  createButton("Download SVG").mousePressed(() => {
    save("sketch.svg");
  });
}
