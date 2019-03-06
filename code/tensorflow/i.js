//sudo npm install @tensorflow/tfjs-node --unsafe-perm=true --allow-root

//https://medium.com/@jamesjefferyuk/how-to-use-npm-behind-a-socks-proxy-c81d6f51dff8

//https://www.hostingadvice.com/how-to/update-node-js-latest-version/

// Load the package:
// Use '@tensorflow/tfjs-node-gpu' to run with GPU.
// Use '@tensorflow/tfjs' to run without the C++ binding.
const tf = require('@tensorflow/tfjs');
//import * as tf from '@tensorflow/tfjs-node';
//require('@tensorflow/tfjs-node');

//const tf = require('@tensorflow/tfjs-node');
// Train a simple model:
(async function(){

const model = tf.sequential();
model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
model.add(tf.layers.dense({units: 1, activation: 'linear'}));
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

const xs = tf.randomNormal([100, 10]);
const ys = tf.randomNormal([100, 1]);
console.log("before fit");
for(let i=0;i<1;i++){
        console.log(`-----------3.${i}`);
await model.fit(xs, ys, {
  epochs: 100,
  callbacks: {
    onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log.loss}`)
  }
});
}
})();
