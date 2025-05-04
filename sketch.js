/// <reference path="./p5/svg.d.ts" />

function setup() {
  createCanvas(400, 400, "svg");
  noLoop();
  addDownloadButton();
}

function draw() {
  background(220);
  noStroke();
  const s = 100;

  for (let i = 0; i < 100; i++) {
    const x = random(0, width);
    const y = random(0, height);
    if (i % 2 === 0) {
      fill(0);
    } else {
      fill(255);
    }
    rect(x, y, s, s);
  }
}

//

function addDownloadButton() {
  createButton("Download SVG").mousePressed(() => {
    save("sketch.svg");
  });
}
