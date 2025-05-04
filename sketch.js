/// <reference path="./p5/svg.d.ts" />

function setup() {
  createCanvas(400, 400, "svg");
  noLoop();
  addDownloadButton();
}

function draw() {
  background(220);
  const s = 100;

  rect(0, 0, s, s);
  rect(0, height - s, s, s);
  rect(width - s, 0, s, s);
  rect(width - s, height - s, s, s);
}

//

function addDownloadButton() {
  createButton("Download SVG").mousePressed(() => {
    save();
  });
}
