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
  addDownloadButton();

  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!
  background(220);

  noStroke();
  fill(0);

  // Center the text
  const t = "AOO";
  const fontSize = 60;

  textLeading(fontSize);
  textFont(font);
  textSize(fontSize);
  const text_width = textWidth(t);

  const text_x = (width - text_width) / 2;
  const text_y = (height + fontSize) / 2;

  textSVG(t, text_x, text_y);
}
