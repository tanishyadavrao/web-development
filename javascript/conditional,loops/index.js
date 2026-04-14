console.log("Hello my self Tanish Yadav");

let age = 25;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can't vote");
}
let a = 1;
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let obj = {
  name: "Tanish Yadav",
  "roll no.": "125113045",
  branch: "Microelectrincs and VLSI Engineering",
};
for (const key in obj) {    //for-in loop
  const element = obj[key];
  console.log(key, element);
}
for (const key in obj) {    //for-in loop
  // const element = obj[key];
  console.log(key); // only for keys
}
for (const f of "hello world") { //for-of loop
  console.log(f);
}
let i = 2;
while (i < 6) {
  console.log(i);
  i++;
}
