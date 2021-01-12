
const options = {
  dataUrl: './data/colorData.json',
  inputs: ['r', 'g', 'b'],
  outputs: ['color'],
  task: 'classification',
  debug: true
}


// 初始化 神经网络
const nn = ml5.neuralNetwork(options, dataLoaded);


function dataLoaded() {
  // 数据加载后 规格化数据 并 训练模型
  console.log('data loaded!')
  nn.normalizeData();
  console.log('done normalization!')
  trainModel();
}

function trainModel() {
  const trainingOptions = {
    epochs: 32,
    batchSize: 12
  }
  console.log('training starts...')
  nn.train(trainingOptions, whileTraining, doneTraining)
}

function whileTraining(epoch, loss) {
  console.log(`epoch: ${epoch}, loss: ${loss}`)
}

function doneTraining() {
  console.log('training complete!')
  doClassify()
}

// 根据模型与输入 做出分类判断
function doClassify() {
  const input = {
    r: 255,
    g: 122,
    b: 250
  }
  nn.classify(input, (error, results) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(results)
  })
}