let classifier;

let video;

function preload() {
  classifier = ml5.imageClassifier('MobileNet', video);
  video = createCapture(VIDEO);
  video.hide()
}

function setup() {
  createCanvas(640, 480);
  background(0);
  classifier.classify(gotResult);
}


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    createDiv(`Label: ${results[0].label}`);
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
  }
}

function draw() {
  image(video, 0, 0);
}