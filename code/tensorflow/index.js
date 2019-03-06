//import * as tf from '@tensorflow/tfjs-node';
//var win;
//nw.Window.open('./index.html',{},function(w){win=w;});

const tf = require('@tensorflow/tfjs-node');
//const tf = require('@tensorflow/tfjs');
//require('@tensorflow/tfjs-node');
//console.log(tf);

(async function () {

    const model = tf.sequential({
        name:'xor',
        layers: [
            tf.layers.dense({
                inputShape:[2],
                activation: 'sigmoid',
                units:2
            }),
            tf.layers.dense({
                activation:'sigmoid',
                units:1
            })
        ]
    });
//console.log(model);
    const xs=tf.tensor2d([
        [1,1],
        [1,0],
        [0,1],
        [0,0]
    ]);

    const ys=tf.tensor2d([
        [0],
        [1],
        [1],
        [0]
    ]);

    console.log("-----------1")

    model.compile({
        optimizer: tf.train.adam(0.01),
        loss: tf.losses.meanSquaredError
    });//.then((value)=>{console.log("compile");});

    console.log("-----------2")

    for(let i=0; i<10; i++){
      console.log("-----------3");
    await model.fit(xs, ys,{
            epochs: 8,
            shuffle: true,
	batchSize:3
            //verbose: true
        });//.then((h)=>{console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);},()=>{console.log("error")});
	
    }

    console.log("-----------4");

    model.predict(xs).print();

    console.log("num of tensors:", tf.memory().numTensors);
})();
