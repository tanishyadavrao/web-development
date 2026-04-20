import fs from "fs/promises";
let a= await fs.readFile("file1.txt");
console.log(a.toString());

let b= await fs.writeFile("file2.txt","\n\n\n\nthis is a amazing promise");
let c= await fs.readFile("file2.txt");
console.log(c.toString());