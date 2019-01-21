import {TestModule} from "./lib.js";

var f = new TestModule();
console.log("intestmodule");
document.getElementById('result').innerHTML = 'result: ' + f.foo(10);
document.getElementById('source').innerHTML = "f.foo source: " + f.foo.toString();
