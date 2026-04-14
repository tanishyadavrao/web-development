let arr1=[1,2,4,5,7,3];

console.log(arr1);
console.log(arr1.length);
arr1[2]=9;  //arrays afre ,mutable
console.log(arr1); 
console.log(arr1.toString());
console.log(arr1.join("  to  "));
console.log(arr1.push(8 ));
console.log(arr1);

let arr2 = [1,3,4,5,6,7];    //foreach loop
arr2.forEach((value,index,arr)=>{
    console.log(value,index,arr);

})

let obj={
    a:1,
    b:2,
    c:4,
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(element);
    
    
}