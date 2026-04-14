let x = Math.random();

let a = prompt("enter first number :");
let c = prompt("enter operation");
let b = prompt("enter second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (x > 0.1) {
  alert(`your result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  alert(`your result is ${eval(`${a} ${c} ${b}`)}`);
}
