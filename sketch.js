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
  const t = "ciao\nosd";
  const fontSize = 72;
  const textW = textWidth(t);
  const x = (width - textW) / 2;
  const y = height / 2;

  textSVG(font, t, x, y, fontSize);

  graphics.fill("black");
  graphics.noStroke();
  textSize(fontSize);
  textFont(font);
  const w = textWidth(t);
  rect(x, y, w, fontSize);
  textSVG(font, t, 100, 100, fontSize, graphics);
  image(graphics, 0, 0);
}
