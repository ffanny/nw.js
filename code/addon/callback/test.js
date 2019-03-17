// test.js
const addon = require('./build/Release/addon');

addon((msg) => {
  console.log(msg);
// 打印: 'hello world'
});
