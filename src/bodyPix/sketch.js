let bodypix;
let segmentation;
let img;

function preload() {
  img = loadImage('./imgs/bodypix.jpg');
  bodypix = ml5.bodyPix();
}

function setup() {
  createCanvas(400, 300);
  bodypix.segment(img, gotResults);
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
    return;
  }
  segmentation = results;
  background(0);
  image(segmentation.backgroundMask, 0, 0, width, height);
}