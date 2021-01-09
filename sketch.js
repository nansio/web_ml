/*
 * @description: 
 * @version: 
 * @Author: ya`nan
 * @Date: 2021-01-09 18:08:04
 * @LastEditors: ya`nan
 * @LastEditTime: 2021-01-09 18:18:46
 */

let classifier;

let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/bird.jpg');
}

function setup() {
  createCanvas(400, 400)
  classifier.classify(img, gotResult)
  image(img, 0, 0)
}

function gotResult(error, results) {
  if (error) {
    console.error(error)
  } else {
    console.log('results:', results)
    createDiv(`Label: ${ results[0].label}`)
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`)
  }
}