//forEach
let arr = [ 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// let ans = arr.forEach((index, el)=> {
//    return el
// })

// console.log(ans)

let ans = arr.filter((el)=>{
    return el%5==0;
}).map((el,index)=>{
    return el*2;
}).reduce((acc,el)=>{
    return acc+el;
})
console.log(ans);


// reduce

// let output = arr.reduce((acc, el)=>{
//     return acc+el;
// })
// console.log(output);










