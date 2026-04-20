const fs = require("fs");
console.log(fs);

fs.writeFile("file1.txt","this is a text file",()=>{
    console.log("done");
    fs.readFile("file1.txt",(error,data)=>{
        console.log(error,data.toString());
    })
});