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
  rectMode(CENTER);
  angleMode(DEGREES);
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!
  // background(220);

  noStroke();
  fill(0);

  // Center the text
  const t = "WTF";
  const fontSize = 120;

  textFont(font);
  textLeading(fontSize);
  textSize(fontSize);
  // textSVG(t, 0, fontSize);

  const text_width = textWidth(t);
  let parti = 40;
  let h_parti = fontSize / parti;
  const angle_offset = 4;
  const offset = 1;
  for (let i = 0; i < parti; i++) {
    push();
    translate(text_width / 2, 0);
    translate(random(-offset, offset), 0);
    rotate(random(-angle_offset, angle_offset));

    beginClip();
    // stroke("red");
    // strokeWeight(4);
    // noFill();
    // stroke(0);
    // strokeWeight(1);
    // rectMode(CENTER);
    rect(0, i * h_parti + h_parti / 2, text_width, h_parti);
    endClip();

    textSVG(t, -text_width / 2, fontSize);

    pop();
  }
}
