import fs from "fs/promises"
import fsn from "fs"
import path from "path";

const basepath='\\codes\\web dev\\exercise\\organise files';
// console.log(fs);



let files= await fs.readdir(basepath);
// console.log(files);

for (const item of files) {
    let ext=item.split(".")[item.split(".").length-1];
    console.log(ext);
    if(fsn.existsSync(path.join(basepath,ext)) && ext!="js" && ext!="json"){
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item));

    }
    else{
        fs.mkdir(ext);
    }
}