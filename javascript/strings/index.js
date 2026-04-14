let x= "hello world";
console.log(x);
console.log(x[0]);
console.log(x[3]);
console.log(x.length);

let my_name = "Rohan";
let friend = "Shyam";

console.log("my name is " + my_name + " and my friend's name is " +friend);
console.log(`my name is ${my_name}  and my friend's name is ${friend}` );

let a = "happy";
// let b = "happ"y";      //will produce error
let c = "happ\"y";
console.log(a);

console.log(c);
console.log(a.toUpperCase());   //() are important at end
console.log(a.slice(1,4));
console.log(a.slice(2));
console.log(a.replace("pp","rr"));
console.log(a.concat(x));
console.log(a.concat(x,"good"));
let g = "  better  NIT"
console.log(g.trim());