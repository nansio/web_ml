let handpose;
let predictions = [];
let img;

function preload() {
  img = loadImage('data/rock.jpg');
}

function setup() {
  document.getElementById('text').textContent= 'Fetching model...';
  createCanvas(500, 556);
  handpose = ml5.handpose(modelReady);

  frameRate(1);
}

function modelReady() {
  console.log('Model ready!');
  document.getElementById('text').textContent= 'Model ready...';
  
  handpose.on('predict', gotResult);
  handpose.predict(img);
  document.getElementById('text').textContent = 'done predicting';
}

function gotResult( result) {
  predictions = result
}

function draw() {
  if (predictions.length > 0) {
    image(img, 0, 0, width, height);
    drawKeyPoints();
    noLoop();
  }
}

function drawKeyPoints() {
  for(let i = 0; i < predictions.length; i++) {
    const prediction = predictions[i];
    for(let j = 0; j < prediction.landmarks.length; j++) {
      const keyPoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      ellipse(keyPoint[0], keyPoint[1], 10, 10);
    }
  }
}