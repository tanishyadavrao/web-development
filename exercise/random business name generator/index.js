// let adjectives = {
//   a: "crazy",
//   b: "amazing",
//   c: "fire",
// };
// let shop_name = {
//   a: "engine",
//   b: "foods",
//   c: "garments",
// };
// let another_word = {
//   a: "bros",
//   b: "limited",
//   c: "hub",
// }; 

let random = Math.random();
let first,second,third;
console.log(random);

if(random<0.33){
  first=" crazy ";
}
else if(random>0.33&&random<0.66){
  first=" amazing ";
}
else {
  first=" fire ";
}
if(random<0.33){
  second=" engine ";
}
else if(random>0.33&&random<0.66){
  second=" foods ";
}
else {
  second=" garments ";
}
if(random<0.33){
  third=" bros ";
}
else if(random>0.33&&random<0.66){
  third=" limited ";
}
else {
  third=" hub ";
}
console.log(first + second + third);