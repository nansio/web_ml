let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(1280, 840);
  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', (results) => {
    poses = results
  });
  video.hide();
}

function modelReady() {
  console.log('model ready!');
  select('#status').html('Model Loaded!');
}

function draw() {
  image(video, 0, 0, width, height);
  drawKeyPoints();
  drawSkeleton();
}

// draw ellipses over the detected keypoints
function drawKeyPoints() {
  for(let i =0; i < poses.length; i++) {
    let pose = poses[i].pose;
    for(let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      if (keypoint.score > 0.2) {
        fill(0, 255,0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// draw the skeleton
function drawSkeleton() {
  for(let i =0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    for(let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(0, 0, 255);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}


