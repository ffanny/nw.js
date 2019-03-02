const tf = require('@tensorflow/tfjs-node');
console.log(tf);

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
    });

    console.log("-----------2")

    for(let i=0; i<200; i++){
        console.log(`-----------3.${i}`);
        await model.fit(xs, ys,{
            epochs: 20,
            shuffle: true,
            verbose: true
        });
    }
    console.log("-----------4")

    model.predict(xs).print();

    console.log("num of tensors:", tf.memory().numTensors);
})();