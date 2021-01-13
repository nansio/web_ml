let video;
let uNet;
let segmentationImage;

function preload() {
  uNet = ml5.uNet('face');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  segmentationImage = createImage(width, height);
  uNet.segment(video, gotResult);
}

function gotResult(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  segmentationImage = result.backgroundMask;
  uNet.segment(video, gotResult);
}

function draw() {
  background(0);
  image(segmentationImage, 0, 0, width, height);
}