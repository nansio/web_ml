let classifier;

let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet', (error, model) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Model ready!')
    }
  });
  img = loadImage('images/bird.jpg');
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      createDiv(`Label: ${results[0].label}`);
      createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
    }
  });
  image(img, 0, 0);
}

// using promise and arrow function
// function setup() {
//   let img = loadImage('images/bird.jpg')
//   ml5.imageClassifier('MobileNet').then(classifier => classifier.classify(img)).then((error, results) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(results);
//       createDiv(`Label: ${results[0].label}`);
//       createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
//     }
//   })
// }