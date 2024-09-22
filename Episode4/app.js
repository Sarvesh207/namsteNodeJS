require("./xyz");
// require("./sum");

const { x, calculateSum } = require("./calculate/sum");
// let x = 300;
console.log("I am from app.js",x,"from app.js");
console.log("Value of x", x);
console.log("value of y", calculateSum(5,15));


