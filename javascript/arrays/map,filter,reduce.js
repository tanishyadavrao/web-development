let arr=[1,3,5,11,13];

//let newarr=[];

/*for (let i = 0; i < arr.length; i++) {  // can be done by this 
    const element = arr[i];
    newarr.push(element**2);
    
} */

    let newarr= arr.map((e)=>{    // can also be done by using map
        return e**2;

    })


console.log(newarr);

const greaterthanseven = (e)=>{
    if(e>7){
        return true;
    }
    return false
}
console.log(newarr.filter(greaterthanseven));  //filter

const red = (a,b)=>{
    return a+b;
}

console.log(arr.reduce(red))   //reduce